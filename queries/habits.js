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

module.exports = {
    getAllHabits,
    getHabitById,
    createNewHabit
}