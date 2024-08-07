import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToDo } from '../Models/ToDo';
import { listToDoS } from '../service/ToDoService';
import Header from './Header';

const ListToDo = () => {
    const [todoS, setTodo] = useState<ToDo[]>([]);

    const navigator = useNavigate();
    useEffect(() => {
        listToDoS().then((response) => {
            setTodo(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function addTODO()
    {
        navigator("/add-TODO")
    }

    return (
    <div>
        <Header/>
        <button className="btn btn-primary" type="submit" onClick={addTODO}>Add TODO</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {todoS.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    );
}

export default ListToDo;
