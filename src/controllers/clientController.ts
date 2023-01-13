import { FastifyReply, FastifyRequest } from "fastify"
import clientService from "../services/clientService"

async function getAll(request: FastifyRequest, reply: FastifyReply) {

    reply.send(await clientService.getAll())
}

async function getById(request: FastifyRequest<{ Params: IParams }>, reply: FastifyReply) {

    reply.send(await clientService.getById(request.params.id))
}

async function save(request: FastifyRequest, reply: FastifyReply) {
try {
    await clientService.save(request.body as IClient)
    reply.status(201).send('Successfully registered user!')
} catch (error) {
    
}
    
}

async function edit(request: FastifyRequest<{ Params: IParams }>, reply: FastifyReply) {
    const client = request.body as IClient
    reply.send(await clientService.edit(request.params.id, client))
}

async function del(request: FastifyRequest<{ Params: IParams }>, reply: FastifyReply) {

    reply.send(await clientService.del(request.params.id))
}

export default {
    getAll,
    getById,
    save,
    edit,
    del
} 