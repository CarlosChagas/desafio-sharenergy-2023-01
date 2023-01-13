import { FastifyInstance } from "fastify"
import clientController from "../controllers/clientController"
import jwt from "../security/jwt"

async function routes(fastify: FastifyInstance) {

    fastify.get('/list', { onRequest: jwt.decryptToken }, clientController.getAll)
    fastify.get('/list/:id', { onRequest: jwt.decryptToken }, clientController.getById)
    fastify.post('/save', { onRequest: jwt.decryptToken }, clientController.save)
    fastify.put('/edit/:id', { onRequest: jwt.decryptToken }, clientController.edit)
    fastify.delete('/delete/:id', { onRequest: jwt.decryptToken }, clientController.del)


}
export default routes