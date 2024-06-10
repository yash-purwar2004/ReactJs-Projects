// useState: React hook for managing local component state.
// useTodo: Custom hook that provides access to the ToDoContext values, such as the addTodo function.
import React, { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'



function TodoForm() {
    // todo: State variable for storing the current input value of the to-do.
    // setTodo: Function to update the todo state.
    // addTodo: Function retrieved from the context, used to add a new to-do item.
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()



    const add = (e) => {
      e.preventDefault()

      if (!todo) return

    // Here, the keyword "todo" denotes the string
      addTodo({ todo, completed: false})
      setTodo("")
    // This calls the setTodo function to update the state of the input field, setting it to an empty string. 
    // This effectively clears the input field after the new to-do item has been added.
    }

    
  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />

          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;