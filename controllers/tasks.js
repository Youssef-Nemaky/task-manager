const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async-wrapper')

const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks = await Task.find({});
    res.json({success: true, msg: tasks});
})

const getTask = asyncWrapper(async (req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.findById(taskID);
    if(!task){
        return res.status(404).json({success: false, msg: "Task Not Found"});
    }
    res.json({success: true, msg: task});    
})

const createTask = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({success: true, msg: task});    
})

const updateTask = asyncWrapper(async (req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.findByIdAndUpdate(taskID, req.body, {returnDocument: 'after'})
    if(!task){
        return res.status(404).json({success: false, msg: "Task Not Found"})
    }
    res.status(200).json({success: true, msg: task});    
})

const deleteTask = asyncWrapper(async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findByIdAndDelete(taskID);
    if(!task){
        return res.status(404).json({success: false, msg: "Task Not Found"});
    }
    res.status(200).json({success: true, msg: task});
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}