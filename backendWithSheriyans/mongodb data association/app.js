// ()
const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "harsh",
    age: 25,
    email: "harshgmail.com",
  });
  res.send(user);
});

// ()

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "hello sab kese ho",

    // user id
    user: "67e8d474cdb8f1d7fe511279",
  });

  let user = await userModel.findOne({ _id: "67e8d474cdb8f1d7fe511279" });

  // post id is needed to be push in user posts array
  user.posts.push(post._id);

  // the updates without using findOneAndUpdate is needed to be saved
  await user.save();

  res.send({
    post: post,
    user: user,
  });
});

app.listen(3000);
