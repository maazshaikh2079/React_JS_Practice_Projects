import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            task: "Task To Do",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}
