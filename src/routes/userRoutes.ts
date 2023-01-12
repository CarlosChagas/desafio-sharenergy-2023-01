import Fastify, { FastifyInstance } from "fastify"
import userController from "../controllers/userController"
import userRepository from "../repositories/userRepository"
import decrypt from "../security/jwt"


async function routes(fastify: FastifyInstance) {

    fastify.post('/auth', userController.authenticate)
    

}
export default routes





