const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');
const TodoModel = require("../model/todo.model");

// router.post("/", todoController.createTodo);

router.post("/", async (req, res, next) => {
    let createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
});



module.exports = router;
