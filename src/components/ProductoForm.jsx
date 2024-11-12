import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../services/ProductoService'; 
import { FaArrowLeft } from 'react-icons/fa';  // Importa el ícono de flecha izquierda

const ProductoForm = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();  

    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        cantidad: '',
        categoria: ''
    });

    useEffect(() => {
        if (id) {
            ApiService.getById(id)
                .then(response => {
                    setProducto(response.data);
                })
                .catch(error => console.error('Error al cargar el producto:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            ApiService.update(id, producto)
                .then(response => {
                    alert('Producto actualizado correctamente');
                    navigate('/productos');  
                })
                .catch(error => {
                    console.error('Error al actualizar el producto:', error);
                    alert('Hubo un error al actualizar el producto');
                });
        } else {
            ApiService.create(producto)
                .then(response => {
                    alert('Producto creado correctamente');
                    navigate('/productos');  
                })
                .catch(error => {
                    console.error('Error al crear el producto:', error);
                    alert('Hubo un error al crear el producto');
                });
        }
    };

    const handleGoBack = () => {
        navigate('/productos');  
    };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
                {id ? 'Actualizar Producto' : 'Agregar Producto'} 
                <FaArrowLeft 
                    onClick={handleGoBack} 
                    style={{ marginLeft: '10px', fontSize: '18px', cursor: 'pointer' }} 
                />
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input
                        type="text"
                        className="form-control"
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        value={producto.precio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        name="cantidad"
                        value={producto.cantidad}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        name="categoria"
                        value={producto.categoria}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    {id ? 'Actualizar' : 'Agregar'} Producto
                </button>
            </form>
        </div>
    );
};

export default ProductoForm;
