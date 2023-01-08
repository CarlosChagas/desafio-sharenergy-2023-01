const userDb: Array<Iuser> = [
    {
        username: 'desafiosharenergy',
        password: '$2a$10$YRkDZ.GPfYjyYY5Ccw44bOJN7rwBsFtiT/sKS8emzJs6rw/uJHfmi'
    },
    {
        username: 'desafiosharenergy2',
        password: '$2a$10$zkGHdc6TRXLjAZl7xj096e/JB6G.KZx0614l/OzVCpnA9GjeAHeBa'
    }
]
async function getUserByName(getUsername: string){
    let getUser = userDb.find(({ username }) => getUsername === username)
    return getUser
}

export default {getUserByName}