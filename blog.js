const express = require('express');
const app = express.Router();
const blog = [
    {
        id: 1,
        title: "My blog",
        content: "My blog content"
    },
    {
        id: 2,
        title: "My blog 2",
        content: "My blog content 2"
    },
    {
        id: 3,
        title: "My blog 3",
        content: "My blog content 3"
    }
]

app.get('/', (req, res) => {
    res.send(blog);
})

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const blog = blog.find(b => b.id === parseInt(id));
    if (!blog) {
        res.status(404).send("Blog not found");
    }
    else {
        res.send(blog);
    }
})
app.post('/', (req, res) => {
    const blog = req.body;
    blog.id = blog.length + 1;
    blog.title = blog.title;
    blog.content = blog.content;
    blog.push(blog);
    res.send("Blog added successfully");
})
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const blog = blog.find(b => b.id === parseInt(id));
    if (!blog) {
        res.status(404).send("Blog not found");
    }
    else {
        blog.title = req.body.title;
        blog.content = req.body.content;
        res.send("Blog updated successfully");
    }
})
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const blog = blog.find(b => b.id === parseInt(id));
    if (!blog) {
        res.status(404).send("Blog not found");
    }
    else {
        const index = blog.indexOf(blog);
        blog.splice(index, 1);
        res.send("Blog deleted successfully");
    }
})
module.exports = app