import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export const User =
  models.User || mongoose.model("User", UserSchema);