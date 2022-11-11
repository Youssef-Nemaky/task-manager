const PORT = process.env.PORT || 3000;
const express = require('express');
require('dotenv').config()
const connectDB = require('./db/connect')
const tasksRouter = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/tasks', tasksRouter);
app.use(notFound);

const start = async ()=>{
    try {
        connectDB(process.env.MONGO_URI);
        console.log("Connected to DB...");
        app.listen(PORT, console.log(`Server is listening on ${PORT}...`));
    } catch (error) {
        console.log("Error");
    }
}

start()