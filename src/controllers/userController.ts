import { FastifyReply, FastifyRequest } from "fastify"
import userService from "../services/userService"

async function authenticate(request: FastifyRequest, reply: FastifyReply) {
        
        const userLogin: IUser = request.body as IUser
        let token = await userService.authenticate(userLogin)
        reply.status(200).send({ response: token, auth: true })

}

export default {authenticate}


