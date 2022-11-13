import jwt, {JwtPayload} from "jsonwebtoken";
import bcrypt from "bcrypt";
import {User} from "@prisma/client";

export interface JwtUserPayload extends JwtPayload {
    userId: string,
    username: string
}

export function jwtSign(user: User) {
    const secret = process.env.JWT_SECRET!;
    return jwt.sign(<JwtUserPayload>{userId: user.id, username: user.username}, secret)
}

export function jwtVerify(token: string) {
    const secret = process.env.JWT_SECRET!;
    return jwt.verify(token, secret)
}

export function bcryptHash(password: string) {
    const salt = Number(process.env.BCRYPT_ROUND!);
    return bcrypt.hash(password, salt)
}

export function bcryptCompare(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword)
}