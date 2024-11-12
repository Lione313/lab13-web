// ClienteService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/clientes';  // Ajusta la URL según tu API

const getAllClientes = () => {
    return axios.get(API_URL);  
}

const getClienteById = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

const createCliente = (cliente) => {
    return axios.post(API_URL, cliente);
}

const updateCliente = (id, cliente) => {
    return axios.put(`${API_URL}/${id}`, cliente);
}

const deleteCliente = (id) => {
    return axios.delete(`${API_URL}/${id}`);
}

export default {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};
