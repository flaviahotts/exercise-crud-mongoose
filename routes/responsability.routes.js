const router = require("express").Router();

const ResponsabilityModel = require("../models/Responsability.model");
const TodoModel = require("../models/Todo.model");


//Create

router.post("/create-responsability/:taskId", async (req, res) => {
try {
    const { todoId } = req.params;

    const newResponsability = await ResponsabilityModel.create({ ...req.body, todo: todoId });

    const editedTodo = await TodoModel.findOneAndUpdate(
    { _id: todoId },
    { $push: { responsability: newResponsability._id } },
    { new: true }
    );

    return res.status(201).json({ newResponsability, editedTodo });
} catch (err) {
    console.error(err);
    return res.status(500).json(err);
}
});

//Read (All)

router.get("/all-responsability", async (req, res) => {
    try {
    const allResponsability = await ResponsabilityModel.find();

    return res.status(200).json(allResponsability);
    } catch (err) {
    console.error(err);
    return res.status(500).json(err);
    }
});

//Read (Detail)

router.get("/:id", async (req, res) => {
    try {
    const { id } = req.params;

    const todo = await ResponsabilityModel.findOne({ _id: id });

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

    const editedTodo = await ResponsabilityModel.findOneAndUpdate(
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

//Delete

router.delete("/delete/:id", async (req, res) => {
    try {
    const { id } = req.params;

    const deletedResponsability = await ResponsabilityModel.deleteOne({ _id: id });

    return res.status(200).json(deletedResponsability);
    } catch (err) {
    console.error(err);
    return res.status(500).json(err);
    }
});

module.exports = router;