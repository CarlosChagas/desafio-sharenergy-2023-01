import { FastifyReply, FastifyRequest } from "fastify"
import IUserBody from "../interfaces/IuserBody"
import userService from "../services/userService"

async function authenticate(request: FastifyRequest<{ Body: IUserBody }>, reply: FastifyReply) {

        const userLogin: IUser = request.body
        let token = await userService.authenticateUser(userLogin)
        reply.status(200).send({ response: token, auth: true })

}

export default authenticate


