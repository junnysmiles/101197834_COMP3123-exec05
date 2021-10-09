const express = require('express');
const app = express();
const router = express.Router();

// Adding File System Module for reading JSON file
let fs = require('fs')


// Created a main page for the index.js
router.get('/', (req, res) => {
  res.send("<h1>Welcome to Lab Exercise 05!</h1>")
})


/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home.html', (req,res) => {
  
  res.sendFile(__dirname + "/home.html")
});


/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  fs.readFile(__dirname + "/user.json", "utf-8", (err, data) => {
    if (err) {
      throw err
    } else {
      res.write(data)
      res.end(data)
    }
  })
});


/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  var username = req.query.username
  var password = req.query.password

  let file = fs.readFile(__dirname + "/user.json")

  let userName = JSON.stringify(file.username)

  console.log(userName)

  /*let response = {
    username = "bret",
    password = "bret@123"
  }*/

});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.send('This is logout router');
});


app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));