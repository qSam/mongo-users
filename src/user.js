const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Schema
const UserSchema = new Schema({
  name: String
});
//Create the model
const User = mongoose.model('user', UserSchema);
//Export the model
module.exports = User;
