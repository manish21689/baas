var express = require('express')
var bodyparser = require('body-parser');
var mroute = require('./routes/master')
const initializeServer = () => {
    var app = express();
    app.use(express.json())
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(bodyparser.json());
    app.use('/master', mroute);
    return app;
}
module.exports = { initializeServer }