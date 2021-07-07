interface Todo {
    id:number,
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
type EditTodo = (id: number, text: string) => void;