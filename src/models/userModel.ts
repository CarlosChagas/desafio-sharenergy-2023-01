import { Schema, model } from "mongoose";
import { ObjectId } from "mongoose-typescript";

const userSchema = new Schema({
    id: { type: ObjectId },
    username: { type: String, required: true },
    password: { type: String, required: true },

})

export const userModel = model('User', userSchema)