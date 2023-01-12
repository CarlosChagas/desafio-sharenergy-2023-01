import Fastify from "fastify"
import userRoutes from './routes/userRoutes'
import mongoose from "mongoose"
import dotenv from 'dotenv';


dotenv.config({ path: '.env' });

const fastify = Fastify({
    logger: true
})

fastify.register(userRoutes, { prefix: '/user' })

fastify.listen({ port: 3333 }, async (err) => {
    
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    let URI: any = process.env.URI
    mongoose.set("strictQuery", true);
    mongoose.connect(URI)
})

