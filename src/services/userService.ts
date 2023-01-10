import userRepository from '../repositories/userRepository'
import { compare } from 'bcrypt-ts'
import jwt from '../security/jwt'


async function authenticateUser(userLogin: IUser) {
   
    if (await checkLoginCredentials(userLogin)) {
       return jwt.generateToken(userLogin)
    } else {
        throw new Error('Check login credentials')
    }
}

async function checkLoginCredentials(userLogin: IUser) {
    let getUser = await userRepository.getUserByName(userLogin.username)

    if (getUser == undefined) {
        return false
    } else {
        if (await validPassword(userLogin.password, getUser.password)) {
            return true
        }
    }
}

async function validPassword(password: string, encryptedPassword: string) {
    if (!await compare(password, encryptedPassword)) {
        throw new Error('Invalid credentials!')
    }
    return true
}

export default { authenticateUser }

