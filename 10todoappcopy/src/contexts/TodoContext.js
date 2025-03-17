import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {// todo:
            id: 1,
            task: "Task To Do",
            completed: false
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},   // use to toggle `completed` field in `todo` object in `todos` array
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}
