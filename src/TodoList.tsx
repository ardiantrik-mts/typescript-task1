import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: ToggleTodo;
    editTodo: EditTodo;
}


export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
            ))}
        </ul>
    );
};