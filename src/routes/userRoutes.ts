import Fastify, { FastifyInstance } from "fastify"
import userController from "../controllers/userController"
import decrypt from "../security/jwt"


async function routes(fastify: FastifyInstance) {

    fastify.post('/auth', userController.authenticate)
    fastify.get('/teste', { onRequest: decrypt.decryptToken }, (request, reply) => { reply.send(request.headers.username) })

}
export default routes





