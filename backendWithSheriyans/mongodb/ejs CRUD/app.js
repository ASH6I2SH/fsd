// ()
const express= require("express");
const app= express();
const path= require("path");
const userModel= require("./models/user");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.render("index");
});

app.post("/create", async function(req, res){
  let {name, email, image}= req.body;
  let createdUser= await userModel.create({
    name: name,
    email: email,
    image: image,
    // name,
    // email,
    // image,
  });
  res.redirect("/read");
});

app.get("/read",async function(req, res){
  // let users= await userModel.find();
  // res.render("read", {users});
  let allusers= await userModel.find();
  res.render("read", {users: allusers});
});

app.get("/edit/:id",async function(req, res){
  let user= await userModel.findOne({_id: req.params.id});
  // res.send(user);
  res.render("edit", {user: user});
  // res.render("edit", {user});
});

app.post("/update/:id",async function(req, res){
  let {name, image, email}= req.body;
  let user= await userModel.findOneAndUpdate({_id: req.params.id}, {name: name, email: email, image: image});
  res.redirect("/read");
});

app.get("/delete/:id",async function(req, res){
  let deletedUser= await userModel.findOneAndDelete({_id: req.params.id});
  res.redirect("/read");
});

app.listen(3000, function(){
    console.log("it's running");
});

