import axios from "axios";
import { ToDo } from "../Models/ToDo";

const REST_API_BASE_URL = 'http://localhost:8080/api/todo';

export const listToDoS = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createToDo = (todo:ToDo ) => {
    return axios.post(REST_API_BASE_URL + "/create", todo);
}
