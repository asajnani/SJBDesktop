const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt"),
      generateAccessToken = require("./generateAccessToken")

const app = express()

require("dotenv").config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//get login page
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/routes')));



app.use(require('./routes/login'));

app.use(require('./routes/createPage')); 

app.use(require('./routes/homepage')); 




var db = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

db.getConnection( (err, connection)=> {
  
  if (err) throw (err)
  console.log("DB connected successful: " + connection.threadId)
})



app.listen(port,
  ()=> console.log('Server started on port ${port}...'))



