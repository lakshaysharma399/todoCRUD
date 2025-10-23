import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [editIndex, setEditIndex] = useState(null) // ✅ track which todo is being edited
  const [editing, setEditing] = useState(false);



  function handleChange(e) {
    settodo(e.target.value)
  }


  function addtodo() {
    if(editing == true){
   let editedtodos =   todos.map(( task, index) =>{
        return editIndex == index ? todo : task;
      })

      settodos(editedtodos);
      setEditing(false);
    }else{
      settodos([...todos, todo]);

    }
   

    settodo("")
  }

  function deletetodo(index){

   let newtodos = todos.filter((_, id) => {

   return index !== id

   })

   settodos(newtodos);
  }

  function edittodo(index){

    settodo(todos[index]);      // put selected todo in input box
    setEditIndex(index);      
    setEditing(true)


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
              {editing? <button class= "add-btn" onClick={addtodo}>Add editied todo</button> : <button class= "add-btn" onClick={addtodo}>Add todo</button> } 


            </div>


          </div>

          <div class="todos">
            <ul>

              {todos.map((name, index) => (

                <li key={index}> {name} <button onClick={() => {deletetodo(index)}}>Delete</button> <button onClick= { () => {edittodo(index)}}>Edit</button></li>

              ))}

            </ul>



          </div>

        </div>




      </div>


    </>
  )
}

export default App
