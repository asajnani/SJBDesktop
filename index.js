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

app.use(require('./routes/homepage_edited')); 

app.use(require('./routes/face_width_calc')); 

app.use(require('./routes/outer_cone_distance')); 

app.use(require('./routes/pivot_distance')); 

app.use(require('./routes/if_metric')); 

app.use(require('./routes/finishing_pointwidth')); 

app.use(require('./routes/pinion_ratio')); 

app.use(require('./routes/check_pinion_ratio')); 

app.use(require('./routes/check_gear_ratio')); 

app.use(require('./routes/diff_sums')); 

app.use(require('./routes/change_diameters')); 

app.use(require('./routes/machine116')); 

app.use(require('./routes/finish')); 

app.use(require('./routes/newFaceWidthh')); 

app.use(require('./routes/newPivotDistance')); 

app.set('view engine', 'ejs')




var db = mysql.createPool({
  connectionLimit: 100,
  host: "db",
  user: "user",
  password: "password",
  database: "db",
  port: "3306"
})

db.getConnection( (err, connection)=> {
  
  if (err) throw (err)
  console.log("DB connected successful: " + connection.threadId)
})



app.listen(port,
  ()=> console.log('Server started on port ${PORT}...'))



