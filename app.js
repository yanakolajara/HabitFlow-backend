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

app.get('/', (req,res) => {
    res.send('Hello')
})

module.exports = app;