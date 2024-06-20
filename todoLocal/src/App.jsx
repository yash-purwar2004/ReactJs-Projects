import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'

import './App.css'

function App() {
  // todos: State variable for storing the list of to-dos.
  // setTodos: Function to update the todos state.
  const [todos, setTodos] = useState([])


  
  // This "todo" keyword is an object and it contains all the properties
  // The argument (prev) in the arrow function represents the previous state of the to-do list. 
  // This is the array of existing to-do items before the new item is added.
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }



  // { ...todo, ...updatedTodo }: This creates a new object by merging the properties of the current to-do item (todo) 
  // with the properties of the updatedTodo object. The spread operator ... is used to copy properties from both objects. 
  // If there are overlapping properties, the ones from updatedTodo will overwrite those in todo
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)))
  }



  // (todo) => todo.id !== id
  // This arrow function is applied to each to-do item (todo) in the prev array.
  // todo.id !== id: Checks if the current to-do item's id does not match the id of the to-do item to be deleted.
  // If the IDs do not match, the to-do item is included in the new array.
  // If the IDs match, the to-do item is excluded from the new array.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  

// localStorage.getItem('todos'): This retrieves the item with the key 'todos' from localStorage. The data is returned as a JSON string.
// JSON.parse(...): This parses the JSON string into a JavaScript object (or array, if the stored data is an array). 
// storedTodos will be assigned this parsed value.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])




  // useEffect: Runs whenever the todos state changes. It saves the current list of to-dos to localStorage.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])





  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>

          
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (

              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
