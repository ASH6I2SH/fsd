// ()
const express = require('express')
const app = express()

// user model is imported
const userModel= require("./usermodel")

// at /create route the user is created using create with userModel
app.get('/create', async function (req, res) {
  let createduser= await userModel.create({
    name: "ashish",
    username: "ashish",
    email: "ashish@gmail.com"
  })
  res.send(createduser)
})

// at /update route the user is updated using findOneAndUpdate with userModel
app.get('/update', async function (req, res) {
  let updateduser= await userModel.findOneAndUpdate({username: "rohit"}, {name: "Aniket Pandey"}, {new: true});
  res.send(updateduser);
})

// at /read route the users are read using find with userModel
app.get('/read', async function (req, res) {
  let users= await userModel.find();
  res.send(users);
})

// at /readone route the single user is read using find with userModel
app.get('/readone', async function (req, res) {
  let user= await userModel.find({name: "Aniket Pandey"});
  res.send(user);
})

// at /readfindone route the single user is read using findOne with userModel
app.get('/readfindone', async function (req, res) {
  let user= await userModel.findOne({name: "ashish"});
  res.send(user);
})

// at /delete route the user is deleted using findOneAndDelete with userModel
app.get('/delete', async function (req, res) {
  // {
  //   name:"Aniket Pandey",
  //   username: "rohit",
  //   email: "rohit@gmail.com"
  // }
  let user= await userModel.findOneAndDelete({username: "rohit"});
  res.send(`${user.name} is deleted`);
})

app.listen(3000, function(){
    console.log("it's running")
})

