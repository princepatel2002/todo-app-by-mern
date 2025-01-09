import React, { useState } from 'react'
import "../App"
import axios from "axios"


const Create = () => {
    const [task, setTask] = useState()

    const handleAdd = ()=>{
        axios.post("http://localhost:3000/add",{task:task})
        .then(result => location.reload())
        .catch(err =>console.log(err))

    }
  return (
    <div className='create_form'>
        <input type="text" placeholder='Enter Your Task' onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd} type='button'>Add</button>
    </div>
  )
}

export default Create