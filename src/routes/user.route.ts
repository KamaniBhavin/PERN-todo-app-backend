import {Router} from "express";
import {signin, signup} from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/sign-in", signin)
userRouter.post("/sign-up", signup)


export default userRouter;