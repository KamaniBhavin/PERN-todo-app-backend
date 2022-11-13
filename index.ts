import express, {NextFunction, Request, Response} from "express";
import * as dotenv from "dotenv";
import userRouter from "./src/routes/user.route";
import todoRouter from "./src/routes/todo.route";
import {authMiddleware} from "./src/middlewares/auth.middleware";
import morgan from "morgan";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", userRouter)
app.use("/api/todos", authMiddleware, todoRouter)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500)
    res.json({error: err.message})
})

app.listen(port, () => {
    console.log(`Server is on ${port}`);
})
