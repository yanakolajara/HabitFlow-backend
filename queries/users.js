const db = require('../db/dbConfig');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

const login = async (data) => {
    try {
        const {email, password} = data;
        const foundUser = await db.any("SELECT * FROM users WHERE email =  $1", [email])
        if(foundUser.length === 0){
            throw{
                message: "error",
                error: "User does not exists, please sign up."
            }
        }else{
            let user = foundUser[0];
            const comparedPassword = password === user.password
            console.log(comparedPassword)
            if(!comparedPassword){
                throw { message: "error", error: "Please check your email and password"}
            }else{
                let jwtToken = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.JWT_TOKEN_SECRET_KEY,
                {expiresIn: "7d"}
                )
                return jwtToken;
            }
        }
    } catch (error) {
        return error
    }
}

const findUserWithToken = async (id) => {
    try {
        const user = await db.any("SELECT * FROM users WHERE id = $1", [id])
        return user
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserInfo,
    deleteUser,
    login,
    findUserWithToken
}