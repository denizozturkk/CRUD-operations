import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToDo } from '../Models/ToDo';
import { createToDo } from '../service/ToDoService';

const ToDoComponent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const navigator = useNavigate();

    function handleTitle(e:any) {
        setTitle(e.target.value);
    }

    function handleDescription(e:any) {
        setDescription(e.target.value);
    }

    function saveTODO(e:any)
    {

        e.preventDefault();
        let todo: ToDo = {title, description};
        console.log(todo);
        createToDo(todo).then((response) => {
            console.log(response.data);
            navigator("/")
        })
    }
    return (
        <div>
            <td className='align-middle'>
            <div className="card" style={{ width: "18rem" }}>

            <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Title"
                aria-label=".form-control-lg example"
                value={title}
                onChange={handleTitle}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Description"
                aria-label="default input example"
                value={description}
                onChange={handleDescription}
            />
            <input className="btn btn-primary" type="submit" value="Submit" onClick={saveTODO}/>
            <input className="btn btn-primary" type="reset" value="Reset"></input>

            </div>
            </td>
        </div>
    );
}

export default ToDoComponent;
