import Fastify, { FastifyInstance, FastifyRequest } from "fastify"
import authenticate from "../controllers/userController"
import IUserBody from "../interfaces/IuserBody"
import decrypt from "../security/jwt"


async function routes(fastify: FastifyInstance) {

    fastify.post('/auth', authenticate)
    fastify.get('/teste', { onRequest: decrypt.decryptToken }, (request, reply) => { reply.send(request.headers.username) })

}
export default routes





