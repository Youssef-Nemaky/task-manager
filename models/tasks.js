const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name can't be empty"],
        max_length: [20, "length can't exceed 20 characters"],
    },

    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema);