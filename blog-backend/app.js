const express = require('express');
const app = express();
const blog = require('./controller/blog.js');
const user = require('./controller/user.js');
const thread = require('./controller/thread.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/blog', blog);
app.use('/user', user);
app.use('/thread', thread);

app.listen(3030);
