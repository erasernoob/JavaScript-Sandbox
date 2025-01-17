// to connect the database
const mongoose = require('mongoose')


const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB success', conn.connection.host)
}

module.exports = connectDB  
