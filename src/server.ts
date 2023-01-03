import Fastify from "fastify"

const fastify = Fastify({
    logger: true
})

const start = () => {

    fastify.get('/', (request, reply) => {
        reply.send("Hello world!!!!!")
    })

    try {
        fastify.listen({ port: 3333 })
        console.log("Server Working!");

    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()