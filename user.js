const express = require('express');
const app = express.Router();
const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Rohan" },
    { id: 3, name: "Raj" },
]
app.get("/", (req, res) => {
    res.json(users);
});
app.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(s => s.id === parseInt(id));
    if (!user) {
        res.status(404).send("User not found");
    }
    else {
        res.json(user);
    }
});

app.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("User added successfully");
})

app.put('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(s => s.id === parseInt(id));
    if (!user) {
        res.status(404).send("User not found");
    }
    else {
        user.name = req.body.name;
        res.send("User updated successfully");
    }
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(s => s.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        res.send("User Deleted successfully");
    }
    else {
        res.status(404).send("User not found");
    }
});

module.exports = app;
