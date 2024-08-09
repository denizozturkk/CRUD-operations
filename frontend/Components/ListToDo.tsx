import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToDo } from '../Models/ToDo';
import { checkToDo, delToDo, listToDoS } from '../service/ToDoService';

const ListToDo = () => {
    const [todoS, setTodo] = useState<ToDo[]>([]);
    const navigator = useNavigate();
    const[checked, setChecked] = useState(false);
    useEffect(() => {
        listToDoS().then((response) => {
            setTodo(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function addTODO() {
        navigator("/add-TODO");
    }

    function deleteToDo(todo: ToDo) {
        if (todo.id) {
            delToDo(todo.id).then(() => {
                setTodo(todoS.filter(t => t.id !== todo.id));
            }).catch(error => {
                console.error('There was an error deleting the todo!', error);
            });
        } else {
            console.log("could not be deleted");
        }
    }

    function updateToDo(todo: ToDo) {
        if (todo.id) {
            navigator(`/edit-TODO/${todo.id}`);
        } else {
            console.log("no id exists");
        }
    }
    function check(todo: ToDo) {
        if (todo.id) {
            const updatedToDo = { ...todo, completed: !todo.completed };
    
            checkToDo(todo.id, updatedToDo).then(() => {
                setTodo(prevTodos =>
                    prevTodos.map(t =>
                        t.id === todo.id ? updatedToDo : t
                    )
                );
            }).catch(error => {
                console.error('There was an error updating the todo!', error);
            });
        } else {
            console.log("no id exists");
        }
    }
    

    return (
        <div>
            <h2 className="text-center">TODO LIST</h2>
            <button className="add" type="submit" onClick={addTODO}>Add TODO</button>
            <table className="table-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th id='comp' scope="col">Completed</th>
                        <th id="act" scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todoS.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={todo.completed}
                                    onChange={() => check(todo)}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            </label>
                            </div>
                            <td>
                                <button type="button" className="btn btn-secondary btn-sm me-2" onClick={() => deleteToDo(todo)}>Delete</button>
                                <button type="button" className="btn btn-secondary btn-sm" onClick={() => updateToDo(todo)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListToDo;
