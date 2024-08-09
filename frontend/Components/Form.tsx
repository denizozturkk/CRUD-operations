import React, { ChangeEvent, useState } from 'react'
import { ToDo } from '../Models/ToDo';
const Form = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event:ChangeEvent)
    {
        
    }
    function addToDo()
    {

    }
    function deleteToDo(id:number)
    {

    }
    function editTodo(id:number)
    {

    }
    function viewToDo(id:number)
    {

    }


  return (
    <form className='text-center'>
        <input type="text" placeholder='Enter a title for TODO...' className='in' value={newTask} onChange={handleInputChange} required/>
        <br></br>
        <input type="text" placeholder='Enter a description for TODO...' className='in' required/>
        <br></br>
        <button className='primary' type='submit'>Add</button><br></br>
        <button className='secondary' type='submit'>Edit</button><br></br>
        <button className='secondary' type='reset'>Reset</button>
    </form>
  )
}

export default Form