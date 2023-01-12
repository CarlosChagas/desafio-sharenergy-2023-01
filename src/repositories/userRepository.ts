import { userModel } from "../models/userModel"


async function findUserByUsername(userLoginUsername: string) {
    let getUser = await userModel.findOne({ username: userLoginUsername })

    return getUser
}

export default { findUserByUsername }