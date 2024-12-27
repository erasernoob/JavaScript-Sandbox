const express = require('express')
const cors = require('cors')
const path = require('path')
// import the dotenv
require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// add the body parser middleware 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// cors middleware to fix the cors problem 
app.use(cors({
    origin: 
    [
        'http://localhost:3000',
        'http://localhost:5000',
    ], credentials: true
}))

// Add the Static Folder
app.use(express.static(path.join(__dirname, 'public')))



const ideaRouter = require('./routes/ideas')
// the app use the ideas router
app.use('/api/ideas', ideaRouter)



app.listen(port, () => console.log('Server listening'))