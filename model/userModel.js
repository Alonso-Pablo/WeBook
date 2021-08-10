import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String
});
const userModel = mongoose.models.userSchema || mongoose.model("user", userSchema);

export default userModel;