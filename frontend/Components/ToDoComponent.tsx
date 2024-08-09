import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDo } from '../Models/ToDo';
import { createToDo, getToDo, updateToDo } from '../service/ToDoService';

const ToDoComponent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const navigator = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchToDo = async () => {
            if (id) {
                const numericId = parseInt(id, 10);
                if (!isNaN(numericId)) {
                    try {
                        const todo = await getToDo(numericId);
                        setTitle(todo.title || "");
                        setDescription(todo.description || "");
                    } catch (error) {
                        console.error("Error fetching the TODO item:", error);
                    }
                }
            }
        };
    
        fetchToDo();
    }, [id]);


    function handleTitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTitle(e.target.value);
    }

    function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value);
    }

    function saveTODO(e: React.FormEvent) {
        e.preventDefault();
        let todo: ToDo = { title, description };

        if (id) {
            const numericId = parseInt(id, 10);
            if (!isNaN(numericId)) {
                updateToDo(numericId, todo).then((response) => {
                    console.log(response.data);
                    navigator("/");
                }).catch(error => {
                    console.error('There was an error updating the todo!', error);
                });
            }
        } else {
            createToDo(todo).then((response) => {
                console.log(response.data);
                navigator("/");
            }).catch(error => {
                console.error('There was an error creating the todo!', error);
            });
        }
    }

    function pageTitle() {
        return id ? <h2 className='text-center'>Update TODO</h2> : <h2 className='text-center'>Add TODO</h2>;
    }

    return (
        <div id='sa'>
            {pageTitle()}
            <div className="card" style={{ 
                width: "40rem", 
                height: "18rem", 
                borderRadius: "10px", 
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
                backgroundColor: 'lightgoldenrodyellow', 
                margin: "70px auto",
                border: "3px solid red"
            }}>
                <form className="form" onSubmit={saveTODO}>
                    <textarea
                        className="form-control form-control-lg title-input"
                        placeholder="Title"
                        aria-label=".form-control-lg example"
                        value={title}
                        onChange={handleTitle}
                        required
                    />
                    <textarea
                        className="form-control description-input"
                        placeholder="Description"
                        aria-label="default input example"
                        value={description}
                        onChange={handleDescription}
                        required
                    />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ToDoComponent;
