const express = require("express"),
      bodyParser = require('body-parser'),
      path = require('path'),
      mysql = require("mysql"),
      bcrypt = require("bcrypt")
      generateAccessToken = require("../generateAccessToken")
      jwt = require('jsonwebtoken');

const router = express.Router();

var db = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "newuser",
  password: "dehAAn55?",
  database: "userDB",
  port: "3306"
})

router.post("/login", (req, res)=> {
  const user = req.body.username
  const password = req.body.password

  db.getConnection ( async (err, connection)=> {

    if (err) throw (err)
    const sqlSearch = "Select * from userTable where user = ?"
    const search_query = mysql.format(sqlSearch,[user])

    await connection.query (search_query, async (err, result) => {
      
      connection.release ()

      if (err) throw (err)

      if (result.length == 0) {
        console.log("--------> User does not exist")
        res.sendStatus(404)
      }

      else {
        const hashedPassword = result[0].password
        //get the hashedPassword from result


        if (await bcrypt.compare(password, hashedPassword)) {
          console.log("-------> Login Successful")
          console.log("-------> Generating accessToken")
          const jwt = require('jsonwebtoken');
          //const token = generateAccessToken({user: user})
          const token = jwt.sign({user:user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24m"})
          console.log("Here is token -------->")
          console.log(token)
          //res.send(token)
          res.redirect("/homepage")
        } else {
          res.send("Password incorrect!")
        }
      }
    })
  })
})

const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
  
    console.log(authHeader)
    console.log("token")

    if(typeof authHeader !== 'undefined') {
      //const token = authHeader && authHeader.split(' ')[1]


        console.log(authHeader)
        req.token = authHeader;
        next();
    } else {
        console.log("no token")
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

// router.get("/homepage", (req, res) => {

//    const token = req.headers['authorization']
//   // console.log(token)

//           var decoded = jwt.verify(token ,process.env.ACCESS_TOKEN_SECRET);
//           console.log(decoded)
//         // jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         //     if(err){
//         //         If error send Forbidden (403)
//         //         console.log('ERROR: Could not connect to the protected route');
//         //         res.sendStatus(403);
//         //     } else {
//         //         If token is successfully verified, we can send the autorized data 
//         //         res.json({
//         //             message: 'Successful log in'
//         //         });
//         //         console.log('SUCCESS: Connected to protected route');
//         //     }
//         // })
//     });

// //Check to make sure header is not undefined, if so, return Forbidden (403)


module.exports = router;