import mongoose from "mongoose";
const userAuth = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", userAuth);

export default User;
