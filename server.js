const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const dbSetUp = require('./src/database/setup');
const payloadRoutes = require('./src/routes/payloadRoutes');

app.use(express.json());

//database setup
dbSetUp();

app.use(payloadRoutes);



const PORT = process.env.PORT;  //use env port
app.listen(PORT, () => {
    console.log(`server is up and running on ${PORT}`)
});
