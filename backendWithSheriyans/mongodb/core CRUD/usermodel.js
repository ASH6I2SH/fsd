// ()
const mongoose = require("mongoose");

//This will create mongodb database
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// user schema i.e the details the user will have
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

// This will create collection users the plural form of user
// mongoose.model("user", userSchema);

// To use this model/ collection, we need to export it
module.exports= mongoose.model("user", userSchema);
