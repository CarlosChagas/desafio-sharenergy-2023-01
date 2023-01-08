import userRepository from '../repositories/userRepository'

async function authenticateUser(user: Iuser) {
        
        return await userRepository.authenticateUser(user)
    
}

export default {authenticateUser}

