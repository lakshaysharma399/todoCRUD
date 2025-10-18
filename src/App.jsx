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

      <div class="main-div">

        <div className='inner-div'>

          <div class="heading">

            <div class = "todoheading">
              <label htmlFor="">TODO</label>

            </div>
            <div class = "todolabel">

              <input type="text" placeholder='todo' onChange={handleChange} value={todo} />
              <button class= "add-btn" onClick={addtodo}>Add todo</button>


            </div>


          </div>

          <div class="todos">
            <ul>

              {todos.map((name, index) => (

                <li key={index}> {name}</li>

              ))}

            </ul>



          </div>

        </div>




      </div>


    </>
  )
}

export default App
