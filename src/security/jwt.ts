import { FastifyReply, FastifyRequest } from 'fastify'
import * as  jwt from 'jsonwebtoken'
import IUserBody from '../interfaces/IuserBody'


const SECRET = 'secret jwt env.secret'

function generateToken(data: IUser) {
  return jwt.sign(data, SECRET, {
    expiresIn: 60 * 60 * 24 // expira em 1 dia
  })

}

function decryptToken(request: FastifyRequest<{ Body: IUserBody, Headers: IHeaders }>, reply: FastifyReply, done: () => void) {
  const token = request.headers.accesstoken

  if (!token) {
    return reply.status(401).send({ response: { auth: false, message: 'Token não foi informado' } })
  }


  let data = jwt.verify(token, SECRET)
  const { username } = data as IPayload 
  request.headers.username = username
  console.log(request.headers.username);

 return  done()


}

export default { generateToken, decryptToken }