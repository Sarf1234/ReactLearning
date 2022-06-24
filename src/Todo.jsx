import React, { useState } from 'react'

export default function Todo() {
   
   const [task, setTask] = useState('')
   const [todos, setTodos] = useState(['hello', 'sarfraj'])

    function addtodos(e){
        e.preventDefault();
        setTodos(oldtodos => {
            setTask('')
            return [...oldtodos, task]  
        })
    }

  return (
    <div>
        <h1>best todo app ever</h1>
        <form onSubmit={addtodos}>
            <input type={task} value={task} onChange={event => setTask(event.target.value)}/>
            <button onClick={addtodos} type="submit">add Todos</button>
        </form>
        <ul>
            {todos.map(todo => <li>{todo}</li>)}
        </ul>
    </div>
  )
}
