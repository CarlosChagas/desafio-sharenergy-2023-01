import Fastify from "fastify"
import userRoutes from './routes/userRoutes'

const fastify = Fastify({
    logger: true
})

fastify.register(userRoutes, { prefix: '/user' })

fastify.listen({ port: 3333 }, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

