const express = require('express');
const parser = require('body-parser');
const cors = require('cors')

const router = require('./router/router');
const app = express();

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/', router);


module.exports = app;
app.listen(3001, function () {
    console.log("app listening at 3001");
})
