import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClienteService from '../services/ClienteService';  // Asegúrate de importar correctamente el ApiService
import { FaEdit, FaTrashAlt } from 'react-icons/fa';  // Importa los iconos de react-icons
import './ClienteForm.css';  // Asegúrate de que los estilos sean correctos

export const ListarClientes = () => {
    const [clientes, setClientes] = useState([]);  // Inicializar como arreglo vacío
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');  // Estado para el término de búsqueda
    const [filteredClientes, setFilteredClientes] = useState([]);  // Estado para los clientes filtrados
    const navigate = useNavigate();  // Para navegar al formulario de actualización

    useEffect(() => {
        listarClientes();
    }, []);

    useEffect(() => {
        // Filtrar clientes cuando cambie el término de búsqueda
        const resultados = clientes.filter(cliente =>
            `${cliente.nombre} ${cliente.apellidos}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredClientes(resultados);
    }, [searchTerm, clientes]);

    const listarClientes = () => {
        ClienteService.getAllClientes()  // Llama al servicio para obtener todos los clientes
            .then(response => {
                setClientes(response.data || []);  // Si la respuesta no es válida, se asigna un arreglo vacío
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los clientes:', error);
                setClientes([]);  // Si hay error, asegurarse de asignar un arreglo vacío
                setLoading(false);
            });
    };

    const handleUpdate = (id) => {
       
        navigate(`/editar-cliente/${id}`);
    };

    const handleDelete = (id) => {
   
        ClienteService.deleteCliente(id)
            .then(response => {
                alert('Cliente eliminado correctamente');
                listarClientes(); 
            })
            .catch(error => {
                console.error('Error al eliminar el cliente:', error);
                alert('Hubo un error al eliminar el cliente');
            });
    };

    const handleAddClient = () => {
        navigate('/agregar-clientes');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    if (loading) {
        return <div>Cargando clientes...</div>; 
    }

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <h2 className='text-center'>Listado de Clientes</h2>

            <div className="search-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar cliente..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginBottom: '20px', width: '300px' }}
                />
            </div>

       
            <button
                className='btn btn-primary'
                style={{ marginBottom: '20px' }}
                onClick={handleAddClient}
            >
                Agregar Cliente
            </button>

  
            <div className="productos-list">
                {filteredClientes.length > 0 ? (
                    filteredClientes.map(cliente => (
                        <div className="producto-card" key={cliente.id}>
                            <div className="producto-details">
                                <h5>{cliente.nombre} {cliente.apellidos}</h5>
                                <p>{cliente.email}</p>
                                <p><strong>Edad:</strong> {cliente.edad}</p>
                            </div>
                            <div className="producto-actions">
                            
                                <FaEdit
                                    className="action-icon edit-icon"
                                    onClick={() => handleUpdate(cliente.id)}
                                />

                                
                                <FaTrashAlt
                                    className="action-icon delete-icon"
                                    onClick={() => handleDelete(cliente.id)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron clientes con ese nombre.</p>  
                )}
            </div>
        </div>
    );
};

export default ListarClientes;
