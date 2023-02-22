import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

module.exports = model<IUser>("User", userSchema);
