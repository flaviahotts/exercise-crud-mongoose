const router = require("express").Router();

const TodoModel = require("../models/Todo.model");

//CRUD
//Create

router.post("/create-todo", async (req, res) => {
    try {
    const newTodo = await TodoModel.create(req.body);

    return res.status(201).json(newTodo);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
});



module.exports = router;
