import Fastify, { FastifyInstance } from "fastify"
import authenticate from "../controllers/userController"


const fastify = Fastify({})
async function routes(fastify: FastifyInstance) {

    fastify.post('/auth', authenticate)

}
export default routes





