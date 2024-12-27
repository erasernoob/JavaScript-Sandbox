const mongoose = require('mongoose')

// create the Ideas Schema 
const IdeaSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: [true, 'Add the text field']
    },
    tag: {
        type: String,
    },
    username: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// export the model 
module.exports = mongoose.model('Idea', IdeaSchema)