const express = require("express");
// const path = require('path');
// const session = require("express-session");
// const flash = require("connect-flash");
// var nodemailer = require("nodemailer");
// const bcrypt = require("bcrypt");
// const cookieparser = require("cookie-parser");


const app = express();

// const UserModel = require("./model/user.js");
// const Product = require("./model/product.js");

const port = 3000; // Change this as needed

//for posting the data from signup.html to server
var http = require("http");
var path = require("path");
// var bodyParser = require("body-parser");
var server = http.createServer(app);



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));


const axios = require('axios');

app.set("view engine", "ejs");

// app.use(flash());

// render the ejs views
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  try {

    res.render("index");
  } catch (err) {
    console.log("Error in getting the products");
  }
});

app.post("/api/login", (req, res) => {
  try {
    // const { email, password } = req.body;

    const loda = req.body.email;
    const le = req.body.password;


    let data = JSON.stringify({
      "login_id": loda,
      "password": le
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=A701E15FA0F79A04AA58119B7B74FDC4'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });


    // console.log(loda);
    // console.log(le);

  } catch (error) {
    res.status(500).json({ message: "An error occurred" + error });
  }
});




server.listen(3000, function () {
  console.log("Server listening on port: 3000");
});