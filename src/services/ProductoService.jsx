// services/ProductoService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/productos';  // Asegúrate de que esta URL sea correcta

// Método para obtener todos los productos
const getAll = () => {
    return axios.get(API_URL);
}

// Método para obtener un producto por su ID
const getById = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

// Método para crear un nuevo producto
const create = (producto) => {
    return axios.post(API_URL, producto);
}

// Método para actualizar un producto
const update = (id, producto) => {
    return axios.put(`${API_URL}/${id}`, producto);
}

// Método para eliminar un producto
const remove = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
