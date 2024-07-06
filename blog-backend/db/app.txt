const express = require('express');
const member = require('./controller/member.js');
const role = require('./controller/role.js');
const course = require('./controller/course.js');
const batch= require('./controller/batch.js');
const batch_status= require('./controller/batch_status.js');
const address= require('./controller/address.js');
const sub_course= require('./controller/sub_course.js');
const feedback= require('./controller/feedback.js');
// var bodyParser = require('body-parser')



const app =express();

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/sub_course', sub_course);

app.use('/address', address);

app.use('/batch_status', batch_status);

app.use('/batch', batch);

app.use('/member', member);

app.use('/role', role);

app.use('/course', course);

app.use('/feedback',feedback);


app.listen(4500);