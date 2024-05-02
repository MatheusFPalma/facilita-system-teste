import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createTask = async (taskData: { title: string; description: string }) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateTask = async (id: string, taskData: { title: string; description: string }) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, taskData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteTask = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
