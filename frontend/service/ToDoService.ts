import axios from "axios";
import { ToDo } from "../Models/ToDo";

const REST_API_BASE_URL = 'http://localhost:8080/api/todo';

export const listToDoS = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createToDo = (todo: ToDo) => {
    return axios.post(`${REST_API_BASE_URL}/create`, todo);
}

export const updateToDo = (id: number, todo: ToDo) => {
    return axios.put(`${REST_API_BASE_URL}/update/${id}`, todo);
}

export const delToDo = async (id: number) => {
    try {
        const response = await axios.delete(`${REST_API_BASE_URL}/delete/${id}`);
        console.log('Delete response:', response);
        return response.data;  // Return the data or any useful information from the response
    } catch (error) {
        console.error('Error deleting the TODO item:', error);
        throw error;  // Re-throw the error so that the caller can handle it
    }
};
    

export const getToDo = async (id: number): Promise<ToDo> => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,  // Include credentials for CORS if needed
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching the TODO item:', error);
        throw error;
    }
};

export const checkToDo = (id: number, updatedToDo: ToDo) => {
    return axios.put(`${REST_API_BASE_URL}/check/${id}`);
};



