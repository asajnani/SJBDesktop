const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt")

const router = express.Router();

var db = mysql.createPool({
  connectionLimit: 100,
  host: "db",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

//middleware to read req.body.<params>
//CREATE USER
router.post("/createUser", async (req,res) => { 

  if (req.body.password == req.body.confirm_password){
      const user = req.body.username;
  console.log(user)
  const hashedPassword = await bcrypt.hash(req.body.password,10);
  db.getConnection( async (err, connection) => {
   if (err) throw (err)
   const sqlSearch = "SELECT * FROM userTable WHERE user = ?"
   const search_query = mysql.format(sqlSearch,[user])
   const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)"
   const insert_query = mysql.format(sqlInsert,[user, hashedPassword])
   // ? will be replaced by values
   // ?? will be replaced by string
   await connection.query (search_query, async (err, result) => {
    if (err) throw (err)
    console.log("------> Search Results")
    console.log(result.length)
    if (result.length != 0) {
     connection.release()
     console.log("------> User already exists")
     res.sendStatus(409) 
    } 
    else {
     await connection.query (insert_query, (err, result)=> {
     connection.release()
     if (err) throw (err)
     console.log ("--------> Created new User")
     console.log(result.insertId)
     //res.sendStatus(201)
     res.sendFile(path.join(__dirname, '..', 'views', 'homepage.html'));
    })
   }
  }) //end of connection.query()
  }) //end of db.getConnection()
  }

}) //end of app.post()


module.exports = router;
