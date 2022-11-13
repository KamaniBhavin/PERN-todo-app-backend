import {User} from "@prisma/client";
import {NextFunction, Request, Response} from "express";
import {createUser, signIn} from "../services/user.service";

export async function signup(req: Request, res: Response, next: NextFunction) {
    try {
        const userBody: User = req.body
        console.log(userBody)
        res.json({data: await createUser(userBody)})
    } catch (e) {
        next(e)
    }
}

export async function signin(req: Request, res: Response, next: NextFunction) {
    try {
        const userBody = req.body

        res.json({data: await signIn(userBody.username, userBody.password)})
    } catch (e) {
        next(e)
    }
}