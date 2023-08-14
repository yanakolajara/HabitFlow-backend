require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req,res) => {
    console.log(`Server running in port: ${PORT}`);
})