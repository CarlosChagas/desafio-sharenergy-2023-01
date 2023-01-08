import { FastifyReply, FastifyRequest } from "fastify"
import IuserBody from "../interfaces/IuserBody"
import userService from "../services/userService"



async function authenticate(request: FastifyRequest<{ Body: IuserBody }>, reply: FastifyReply) {
    
        let user: Iuser = request.body
        reply.status(201).send(await userService.authenticateUser(user))
    
}

export default authenticate


