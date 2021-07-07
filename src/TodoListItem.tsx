import React from 'react';
import { useState } from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: ToggleTodo;
    editTodo: EditTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
    const [text, setText] = useState('')
    return (
        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <input
                    type="checkbox"
                    checked={todo.complete} 
                    onClick={() => {
                        toggleTodo(todo)
                    }}
                /> {' '}{todo.text}
                
                
            </label>
            <button onClick={() => { deleteTodo(todo) }} >
                Remove
            </button>
            <form>
                <input
                    type="text"
                    // value={todo.text}
                    placeholder={todo.text}
                    onChange={ev => {
                        setText(ev.target.value);
                    }}
                />
                <button
                    type="submit"
                    onClick={ev => {
                        ev.preventDefault();
                        editTodo(todo.id,text);
                    }}
                >
                    Edit Todo
                </button>
            </form>
        </li>
    );

};