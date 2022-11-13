import {Todo} from "@prisma/client";
import {prisma} from "../utils/prisma.util";


export function createTodo(todo: Todo) {
    return prisma.todo.create({data: todo});
}

export function updateTodo(todo: Todo) {
    return prisma.todo.update({
        where: {id: todo.id},
        data: {title: todo.title, description: todo.description}
    })
}

export function getTodo(todoId: string) {
    return prisma.todo.findFirst({
        where: {id: todoId}
    })
}

export function listTodo(userId: string) {
    return prisma.todo.findMany({
        where: {userId: userId}
    })
}

export function deleteTodo(todoId: string) {
    return prisma.todo.delete({
        where: {id: todoId}
    })
}


