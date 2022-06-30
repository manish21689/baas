var db= require('./config/dbconfig.js');
var Master= require('./models/master')
var Server=require('./server')
const app =Server.initializeServer();
/* var express = require('express')
var bodyparser= require('body-parser');
var mroute=require('./routes/master') */
/* var app = express();
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use('/master',mroute); */
app.listen(process.env.PORT||3000,err=>{
console.log(`sever is running on port${process.env.PORT}`)
})