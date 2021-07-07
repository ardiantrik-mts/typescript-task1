import React from 'react';
import { useState } from 'react';

interface Props {
    addTodo: AddTodo;
    // editTodo: ToggleTodo;
  }

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('')

    return (
        <form>
        <input
            type="text"
            value={text}
            onChange={e => {
                setText(e.target.value);
            }}
        />
        <button
            type="submit"
            onClick={e => {
                e.preventDefault();
                addTodo(text);
                setText('')
            }}
        >
            Add Todo
        </button>
        {/* <button
            type="submit"
            onClick={e => {
                e.preventDefault();
                editTodo(text, );
                setText('')
            }}
        >
            Edit Todo
        </button> */}
        </form>
    );
};