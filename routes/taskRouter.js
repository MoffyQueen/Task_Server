const router = require("express").Router()

const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require("../controller/taskController");

router.route("/").get(getAllTasks).post(createTask)
router.route("/:taskId").patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router