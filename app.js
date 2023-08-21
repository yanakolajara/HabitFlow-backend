const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');

const users = require('./controllers/usersController')
const habits = require('./controllers/habitsController')

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

app.use('/users',users)
app.use('/habits',habits)
users.use('/:userId/habits',habits)

app.get('/', (req,res) => {
    res.send('Hello')
})

app.get('*', (req,res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app;