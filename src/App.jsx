import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])


  function handleChange(e) {
    settodo(e.target.value)
  }


  function addtodo() {
    settodos([...todos, todo]);

    settodo("")
  }



  return (
    <>
      <div>

        <label htmlFor="">TODO</label>
        <input type="text" placeholder='todo' onChange={handleChange} value={todo} />
        <button onClick={addtodo}>Add todo</button>

      </div>

      <div>
        <ul>

          {todos.map((name, index) => (

            <li key={index}> {name}</li>

          ))}

        </ul>



      </div>

    </>
  )
}

export default App
