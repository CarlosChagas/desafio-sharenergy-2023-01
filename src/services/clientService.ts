import { ObjectId } from "mongoose-typescript"
import clientRepository from "../repositories/clientRepository"

async function getAll() {

    return await clientRepository.getAll()

}

async function getById(id: string) {

    return await clientRepository.getById(id)

}

async function save(client: IClient) {

    return await clientRepository.save(client)

}

async function edit(id: string, client: IClient) {
    
    return await clientRepository.edit(id, client)

}

async function del(id: string) {

    return await clientRepository.del(id)

}

export default {
    getAll,
    getById,
    save,
    edit,
    del
}