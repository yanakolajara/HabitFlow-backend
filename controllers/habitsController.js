const express = require('express');
const router = express.Router();

const {
    getAllHabits,
    getHabitById,
    createNewHabit,
    deleteHabit,
    updateHabitInfo
} = require('../queries/habits')

router.get('/', async (req,res) => {
    try {
        const addHabits = await getAllHabits();
        if(addHabits[0]){
            res.status(200).json(addHabits);
        }else{
            res.status(500).json({error: 'Server error'})
        }
    } catch (error) {
        res.send(500).json({error: error});
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const habitById = await getHabitById(req.params.id);
        if(habitById[0]){
            res.status(200).json(habitById)
        }else{
            res.status(404).json({error: 'Habit not found'})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.post('/', async (req,res) => {
    const name = req.body.name
    const difficulty = req.body.difficulty
    const description = req.body.description

    try {
        const newHabit = await createNewHabit(name, difficulty, description);
        res.status(200).json(newHabit)
    } catch (error) {
        res.json({error: error})
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const deletedHabit = await deleteHabit(req.params.id)
        if(deletedHabit.length !== 0){
            res.status(200).json(deletedHabit)
        }else{
            res.status(404).json({error: "Habit not found"})
        }
    } catch (error) {
        
    }
})

router.put('/:id', async (req,res) => {
    const name = req.body.name
    const difficulty = req.body.difficulty
    const description = req.body.description
    const id = req.params.id

    try {
        const habitInfo = await updateHabitInfo(name, difficulty, description, id);
        if(habitInfo.length !== 0){
            res.status(200).json(habitInfo)
        }else{
            res.status(404).json({error: "Habit not found"})
        }
    } catch (error) {
        res.json({error: error})
    }
})

module.exports = router;