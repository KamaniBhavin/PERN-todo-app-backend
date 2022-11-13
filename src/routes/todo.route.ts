import {Router} from "express";
import {create, destroy, get, list, update} from "../controllers/todo.controller";

const todoRouter = Router();

todoRouter.get("/", list)
todoRouter.get("/:id", get)
todoRouter.post("/", create)
todoRouter.put("/", update)
todoRouter.delete("/:id", destroy)

export default todoRouter;