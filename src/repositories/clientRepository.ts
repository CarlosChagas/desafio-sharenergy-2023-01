import { ObjectId } from "mongoose-typescript"
import { clientsModel } from "../models/clientsModel"

async function getAll() {

    return await clientsModel.find()
}

async function getById(id: string) {

    return await clientsModel.findById(id)
}

async function save(client: IClient) {

    return await clientsModel.create(client)
}

async function edit(id: string, client: IClient) {
    await clientsModel.findByIdAndUpdate(id, client)
    return await clientsModel.findById(id)
}

async function del(id: string) {

    return await clientsModel.findByIdAndRemove(id)
}
export default {
    getAll,
    getById,
    save,
    edit,
    del
}