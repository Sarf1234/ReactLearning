import React, { useState } from 'react'
  
let itemId = 0;
export default function Todo() {
   
   const [task, setTask] = useState('')
   const [todos, setTodos] = useState([])

    function addtodos(e){
       e.preventDefault()
        setTodos(oldtodos => {
            setTask('')
            return [...oldtodos, {todo : task, id : itemId++}]  
        })
    }
   
   function deletetodos(itemID){
       setTodos(oldtodos => oldtodos.filter((item) => item.id !== itemID))
   }

  return (
    <div>
        <h1>best todo app ever</h1>
        <form onSubmit={addtodos}>
            <input type="text" value={task} onChange={event => setTask(event.target.value)}/>
            <button type="submit">add Todos</button>
        </form>
        <ul>
            {todos.map((item, index) => {
                return (
                    <div key={item.id}>
                        <li>{item.todo}</li>
                        <button onClick={() => deletetodos(item.id)} >delete</button>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}
