const express = require('express');
const app = express();
const blog = require('./blog.js');
const user = require('./user.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/blog', blog);
app.use('/user', user);
app.listen(3030);
