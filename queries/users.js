const db = require('../db/dbConfig');

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users');
        return allUsers;
    } catch (error) {
        return error;
    }
}

const getUserById = async (id) => {
    try {
        const userById = await db.any('SELECT * FROM users WHERE id=$1',[id]);
        return userById;
    } catch (error) {
        return error;
    }
}

const createNewUser = async (first_name, last_name, dob_day, dob_month, dob_year, gender, email, password) => {
    try {
        const newUser = await db.any('INSERT INTO users (first_name, last_name, dob_day, dob_month, dob_year, gender, email, password) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [first_name, last_name, dob_day, dob_month, dob_year, gender, email, password])
        return newUser
    } catch (error) {
        return error;
    }
}

const updateUserInfo = async (first_name, last_name, dob_day, dob_month, dob_year, gender, email, password, id) => {
    try {
        const userInfo = await db.any('UPDATE users SET first_name = $1, last_name = $2, dob_day = $3, dob_month = $4, dob_year = $5, gender = $6, email = $7, password = $8 WHERE id = $9 RETURNING *',
        [first_name, last_name, dob_day, dob_month, dob_year, gender, email, password, id])
        return userInfo
    } catch (error) {
        return error;
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.any('DELETE FROM users WHERE id = $1 RETURNING *', [id])
        return deletedUser
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserInfo,
    deleteUser
}