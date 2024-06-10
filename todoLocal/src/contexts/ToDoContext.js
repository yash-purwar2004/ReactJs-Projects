import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [{
        
    }],

    addTodo: (todo)=>{},
    updatedTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{} 

  
});


// useTodo: This is a custom hook that allows any functional component to easily consume the ToDoContext.
export const useTodo = () =>{
    return useContext(ToDoContext); // This hook accesses the current value of the ToDoContext and returns it.
}

export const TodoProvider = ToDoContext.Provider;
// This is the Provider component of the ToDoContext. The Provider is used to wrap the components that need access to the context. 
// It provides the context value to its child components.