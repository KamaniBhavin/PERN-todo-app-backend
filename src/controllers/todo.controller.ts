import {Todo} from "@prisma/client";
import {NextFunction, Request, Response} from "express";
import {createTodo, deleteTodo, getTodo, listTodo, updateTodo} from "../services/todo.service";


export async function create(req: Request, res: Response, next: NextFunction) {
    try {
        const todo: Todo = req.body
        res.json({data: await createTodo(todo)});
    } catch (e) {
        next(e)
    }
}

export async function get(req: Request, res: Response, next: NextFunction) {
    try {
        const todoId: string = req.params.id
        res.json({data: await getTodo(todoId)});
    } catch (e) {
        next(e)
    }
}

export async function update(req: Request, res: Response, next: NextFunction) {
    try {
        const todo: Todo = req.body
        res.json({data: await updateTodo(todo)});
    } catch (e) {
        next(e)
    }
}

export async function list(req: Request, res: Response, next: NextFunction) {
    try {
        const userId: string = req.params.id
        res.json({data: await listTodo(userId)});
    } catch (e) {
        next(e)
    }
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
    try {
        const todoId: string = req.params.id
        res.json({data: await deleteTodo(todoId)});
    } catch (e) {
        next(e)
    }
}