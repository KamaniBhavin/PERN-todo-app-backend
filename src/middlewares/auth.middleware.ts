import {NextFunction, Request, Response} from "express";
import {JwtUserPayload, jwtVerify} from "../utils/auth.util";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401)
        res.json({error: "Authorization header is required!"})
        return
    }

    const token = authHeader.split(" ")[1]

    if (!token) {
        res.status(401)
        res.json({error: "Bearer token is required!"})
        return
    }

    const payload = jwtVerify(token)

    if (!payload) {
        res.status(401)
        res.json({error: "Bearer token is required!"})
        return
    }

    req.userId = (payload as JwtUserPayload).userId
    req.username = (payload as JwtUserPayload).username

    next()
}