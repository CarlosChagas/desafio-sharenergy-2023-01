import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    id: { type: String},
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    adress: { type: String, required: true },
    cpf: { type: Number, required: true }
})

export const clientsModel = model('Client', clientSchema)