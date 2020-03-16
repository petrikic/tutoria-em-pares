const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
title: {
    type: String,
    require: true,
},
project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true,
},
assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
},
completed: {
    type: Boolean,
    require: true,
    default: false,
},
data : {
    type: Date,
    default: Date.now(),
},
});



const Task = mongoose.model("Task" , TaskSchema)

module.exports = Task;















