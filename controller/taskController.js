const Tasks = require("../models/task")

const getAllTasks = async (req, res)  => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json({ success: true, tasks}) 
    } catch (error) {
        res.send(error)
    }
}
const getTask = async (req, res)  => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findById({ _id: taskId });
       res.status(200).json({ success: true, task})
    } catch (error) {
        res.send(error)
    }
}
const createTask = async (req, res)  => {
    const { title, description } = req.body
    try {
       if (!title || !description) {
        return res.status(400).json({success: false, msg: 'Please fill all the input fields'})
       }
       const task = await Tasks.create(req.body);
       res.status(201).json({ success: true, task})
    } catch (error) {
        res.send(error)
    }
}
const updateTask = async (req, res)  => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findByIdAndUpdate({_id: taskId }, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({ success: true, task }) 
    } catch (error) {
        res.send(error)
    }
}
const deleteTask = async (req, res)  => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findByIdAndDelete({_id: taskId }) 
        res.status(200).json({ success: true })
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }
