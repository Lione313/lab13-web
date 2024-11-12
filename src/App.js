import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListarCliente';
import ListProductosComponent from './components/ListarProducto';  // Nueva importación para productos
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddClienteComponent from './components/ClienteForm';
import AgregarProducto from './components/ProductoForm';
import ActualizarProducto from './components/ProductoForm';
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            {/* Página principal */}
            <Route path='/' element={<Main />} />

            {/* Listado de clientes */}
            <Route path='/clientes' element={<ListClientesComponent />} />

            {/* Listado de productos */}
            <Route path='/productos' element={<ListProductosComponent />} /> {/* Ruta para productos */}

            {/* Crear nuevo cliente */}
            <Route path='/agregar-clientes' element={<AddClienteComponent />} />

            {/* Editar cliente */}
            <Route path='/editar-cliente/:id' element={<AddClienteComponent />} />

            {/* Crear nuevo producto */}
            <Route path="/producto-creacion" element={<AgregarProducto />} />

            {/* Editar producto */}
            <Route path="/producto-actualizar/:id" element={<ActualizarProducto />} /> {/* Corregido el cierre */}
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
