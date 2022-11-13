import {prisma} from "../utils/prisma.util";
import {bcryptCompare, bcryptHash, jwtSign} from "../utils/auth.util";
import {User} from "@prisma/client";


export async function createUser(user: User) {
    const savedUser = await prisma.user.create({
        data: {
            username: user.username,
            password: await bcryptHash(user.password)
        }
    })
    return jwtSign(savedUser)
}

export async function signIn(username: string, password: string) {
    const user = await prisma.user.findUnique({where: {username: username}})
    if (user == null) {
        throw  Error("user not found!")
    }
    const isValid = await bcryptCompare(password, user.password)
    if (!isValid) {
        throw Error("Invalid Credentials!")
    }

    return jwtSign(user)
}