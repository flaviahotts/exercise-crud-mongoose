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

//Read (All)

router.get("/all-todos", async (req, res) => {
  try {
    const allTodo = await TodoModel.find();

    return res.status(200).json(allTodo);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

//Read (Detail)
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await TodoModel.findOne({ _id: id });

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

//Edit

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedTodo = await TodoModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedTodo);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});






module.exports = router;
