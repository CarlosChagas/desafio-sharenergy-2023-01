import { FastifyReply, FastifyRequest } from 'fastify'
import * as  jwt from 'jsonwebtoken'
import IUserBody from '../interfaces/IUserBody'

const SECRET = 'secret jwt env.secret'

function generateToken(data: IUser) {
  return jwt.sign(data, SECRET, {
    expiresIn: 60 * 60 * 24
  })
}

function decryptToken(request: FastifyRequest<{ Body: IUserBody, Headers: IHeaders }>, reply: FastifyReply, done: () => void) {
  const token = request.headers.accesstoken

  if (!token) {
    return reply.status(401).send({ response: { auth: false, message: 'Token was not informed' } })
  }

  let data = jwt.verify(token, SECRET)
  const { username } = data as IPayload
  request.headers.username = username

  return done()
}

export default { generateToken, decryptToken }