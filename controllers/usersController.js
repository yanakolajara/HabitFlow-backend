const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserInfo,
    deleteUser,
} = require('../queries/users');


router.get('/', async (req,res) =>{
    try {
        const allUsers = await getAllUsers();
        if(allUsers[0]){
            res.status(200).json(allUsers)
        }else{
            res.status(500).json({error: 'Server error'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const userById = await getUserById(req.params.id);
        if(userById[0]){
            res.status(200).json(userById)
        }else{
            res.status(404).json({error: 'User not found'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.post('/', async (req,res) => {
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const dob_day = req.body.dob_day
    const dob_month = req.body.dob_month
    const dob_year = req.body.dob_year
    const gender = req.body.gender
    const email = req.body.email
    const password = req.body.password

    try {
        const newUser = await createNewUser(first_name, last_name, dob_day, dob_month, dob_year, gender, email, password);
        res.status(200).json(newUser)
    } catch (error) {
        res.json({error: error})
    }
})

router.put('/:id', async (req,res) => {
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const dob_day = req.body.dob_day
    const dob_month = req.body.dob_month
    const dob_year = req.body.dob_year
    const gender = req.body.gender
    const email = req.body.email
    const password = req.body.password
    const id = req.params.id

    try {
        const userInfo = await updateUserInfo(first_name, last_name, dob_day, dob_month, dob_year, gender, email, password, id);
        if(userInfo.length !== 0){
            res.status(200).json(userInfo)
        }else{
            res.status(404).json({error: "User not found"})
        }
    } catch (error) {
        res.json({error: error})
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const deletedUser = await deleteUser(req.params.id)
        if(deletedUser.length !== 0){
            res.status(200).json(deletedUser)
        }else{
            res.status(404).json({error: "User not found"})
        }
    } catch (error) {
        
    }
})


module.exports = router;