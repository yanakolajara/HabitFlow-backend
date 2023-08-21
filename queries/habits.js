const db = require('../db/dbConfig')

const getAllHabits = async () => {
    try {
        const allHabits = db.any('SELECT * FROM habits');
        return allHabits;
    } catch (error) {
        return error;
    }
}

const getHabitById = async (id) => {
    try {
        const habitById = await db.any('SELECT * FROM habits WHERE id=$1',[id]);
        return habitById;
    } catch (error) {
        return error;
    }
}

const createNewHabit = async (name, difficulty, description) => {
    try {
        const newHabit = await db.any('INSERT INTO habits (name, difficulty, description) values ($1, $2, $3) RETURNING *',
        [name, difficulty, description])
        return newHabit
    } catch (error) {
        return error;
    }
}

const deleteHabit = async (id) => {
    try {
        const deletedHabit = await db.any('DELETE FROM habits WHERE id = $1 RETURNING *', [id])
        return deletedHabit
    } catch (error) {
        return error
    }
}

const updateHabitInfo = async (name, difficulty, description, id) => {
    try {
        const habitInfo = await db.any('UPDATE habits SET name = $1, difficulty = $2, description = $3 WHERE id = $4 RETURNING *',
        [name, difficulty, description, id])
        return habitInfo
    } catch (error) {
        return error;
    }
}

const getUserHabits = (id) => {
    try {
        const userHabits = db.any("SELECT * FROM users_habits WHERE user_id = $1", [id])
        return userHabits;
    } catch (error) {
        return error;
    }
}

const addHabitToUser = (userId, habitId) => {
    try {
        const habitToUser = db.any("INSERT INTO users_habits (user_id, habit_id) VALUES ($1, $2) RETURNING *", [userId, habitId])
        return habitToUser;
    } catch (error) {
        return error;
    }
}

const getHabitStats = (userId, habitId) => {
    try {
        const stats =  db.any("SELECT * FROM stats WHERE user_id = $1 AND habit_id = $2", [userId, habitId])
        return stats;
    } catch (error) {
        return error;
    }
}

const createHabitStats = (user_id, habit_id, day, month, year, completion, progress) => {
    try {
        const habitStat = db.any("INSERT INTO stats (user_id, habit_id, day, month, year, completion, progress) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [user_id, habit_id, day, month, year, completion, progress])
        return habitStat
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllHabits,
    getHabitById,
    createNewHabit,
    deleteHabit,
    updateHabitInfo,
    getUserHabits,
    addHabitToUser,
    getHabitStats,
    createHabitStats
}