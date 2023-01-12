import { FastifyInstance } from "fastify"
import userController from "../controllers/userController"

async function routes(fastify: FastifyInstance) {

    fastify.post('/auth', userController.authenticate)


}
export default routes





