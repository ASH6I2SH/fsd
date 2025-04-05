// ()
const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const path = require("path");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/create", async function (req, res) {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send(createdUser);
      
    });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

// ()

app.post("/login", async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) res.send("something is wrong");

  bcrypt.compare(password, user.password, function(err, result) {
    if(result) {
      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send("loged In");
    }
    else res.send("something is wrong");
});
  
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000, function (err) {
  if (err) console.error(err);
  else console.log("it's running");
});
