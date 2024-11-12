import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ProductoService';  
import { FaEdit, FaTrash } from 'react-icons/fa';  
import './ClienteForm.css';

export const ListarProducto = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();  

    useEffect(() => {
        listarProductos();
    }, []);

    const listarProductos = () => {
        ApiService.getAll()
            .then(response => {
                setProductos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
                setLoading(false);
            });
    };

    const handleUpdate = (id) => {
        navigate(`/producto-actualizar/${id}`);
    };

    const handleDelete = (id) => {
        ApiService.remove(id)
            .then(response => {
                alert('Producto eliminado correctamente');
                listarProductos(); 
            })
            .catch(error => {
                console.error('Error al eliminar el producto:', error);
                alert('Hubo un error al eliminar el producto');
            });
    };

    const handleAddProduct = () => {
        navigate('/producto-creacion');
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Cargando productos...</div>;  
    }

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <h2 className='text-center'>Listado de Productos</h2>

            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar productos..." 
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <button
                className='btn btn-primary'
                style={{ marginBottom: '20px' }}
                onClick={handleAddProduct}
            >
                Agregar Producto
            </button>

            <div className="productos-list">
                {filteredProductos.map(producto => (
                    <div className="producto-card" key={producto.id}>
                        <div className="producto-details">
                            <h5>{producto.nombre}</h5>
                            <p>{producto.descripcion}</p>
                            <p><strong>Precio:</strong> ${producto.precio}</p>
                            <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                            <p><strong>Categoría:</strong> {producto.categoria}</p>
                        </div>
                        <div className="producto-actions">
                            <FaEdit
                                className="action-icon edit-icon"
                                onClick={() => handleUpdate(producto.id)}
                            />

                            <FaTrash
                                className="action-icon delete-icon"
                                onClick={() => handleDelete(producto.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListarProducto;
