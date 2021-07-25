const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
    let createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
};