import userRepository from '../repositories/userRepository'
import { compare } from 'bcrypt-ts'


async function authenticateUser(userLogin: Iuser) {

    if (await checkLoginCredentials(userLogin)) {
        return await userRepository.getUserByName(userLogin.username)
    } else {
        throw new Error('Check login credentials')
    }
}

async function checkLoginCredentials(userLogin: Iuser) {
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

