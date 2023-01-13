import Fastify from "fastify"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'
import clientRoutes from "./routes/clientRoutes";


dotenv.config({ path: '.env' });

const fastify = Fastify({
    logger: true
})

fastify.register(userRoutes, { prefix: '/user' })
fastify.register(clientRoutes, { prefix: '/clients' })

fastify.listen({ port: 3333 }, async (err) => {
    
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    let URI: any = process.env.URI
    mongoose.set("strictQuery", true);
    mongoose.connect(URI)
})

