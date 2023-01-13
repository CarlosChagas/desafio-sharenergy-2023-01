import { Schema, model } from "mongoose";
import { ObjectId } from "mongoose-typescript";

const clientSchema = new Schema({
    id: { type: ObjectId},
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    adress: { type: String, required: true },
    cpf: { type: Number, required: true }
})

export const clientsModel = model('Client', clientSchema)