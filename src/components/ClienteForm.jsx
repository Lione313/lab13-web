import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';
import './ClienteForm.css'; 
import { FaArrowLeft } from 'react-icons/fa'; 

export const ClienteForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nombre: '',
        apellidos: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            ClienteService.getClienteById(id)
                .then(response => {
                    setCliente(response.data);
                })
                .catch(error => console.error('Error al cargar el cliente:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            ClienteService.updateCliente(id, cliente)
                .then(response => {
                    alert('Cliente actualizado correctamente');
                    navigate('/clientes');
                })
                .catch(error => {
                    console.error('Error al actualizar el cliente:', error);
                    alert('Hubo un error al actualizar el cliente');
                });
        } else {
            ClienteService.createCliente(cliente)
                .then(response => {
                    alert('Cliente creado correctamente');
                    navigate('/clientes');
                })
                .catch(error => {
                    console.error('Error al crear el cliente:', error);
                    alert('Hubo un error al crear el cliente');
                });
        }
    };

    const handleGoBack = () => {
        navigate('/clientes');  // Redirige a la lista de clientes
    };

    return (
        <div className="card-container">
            <div className="card">
                <button className="btn btn-back" onClick={handleGoBack}>
                    <FaArrowLeft style={{ marginRight: '10px' }} /> Regresar
                </button>
                <h2>{id ? 'Actualizar Cliente' : 'Agregar Cliente'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={cliente.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellidos"
                            value={cliente.apellidos}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {id ? 'Actualizar' : 'Agregar'} Cliente
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClienteForm;
