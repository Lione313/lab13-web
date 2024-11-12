import React from 'react';
import { Link } from 'react-router-dom'; // Para crear enlaces a otras páginas
import './Main.css'; // Estilo personalizado, si lo necesitas

const Main = () => {
    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <h1 className="text-center mb-4">¡Bienvenido a nuestra tienda!</h1>

            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://logisber.com/contenido/subidas/2019/08/como-importar-productos.jpg" className="card-img-top" alt="Producto" />
                        <div className="card-body">
                            <h5 className="card-title">Productos</h5>
                            <p className="card-text">Descubre nuestros productos destacados y más vendidos.</p>
                            <Link to="/productos" className="btn btn-primary">Ver productos</Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://play-lh.googleusercontent.com/YQ5NoUyngOEY_ySnhxxaay8STxRuJk0ECxHG-kvo0Qai9oit3GpnTSYPUgersI2Ow5Q" className="card-img-top" alt="Noticias" />
                        <div className="card-body">
                            <h5 className="card-title">Noticias</h5>
                            <p className="card-text">Mantente al día con las últimas novedades y ofertas.</p>
                            <Link to="/noticias" className="btn btn-primary">Ver noticias</Link>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-contact-us-24-hours-image_2241411.jpg" className="card-img-top" alt="Contáctanos" />
                        <div className="card-body">
                            <h5 className="card-title">Contáctanos</h5>
                            <p className="card-text">Estamos aquí para ayudarte. Contáctanos para cualquier consulta.</p>
                            <Link to="/contacto" className="btn btn-primary">Ver contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
