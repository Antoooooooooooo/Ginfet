import React from 'react'
import Mapa from '../imagenes/Mapa.png'
import Logo from '../imagenes/GinfetLogo.png'

export const Footer = () => {
    return (
        <div style={{ backgroundColor: '#222222', color: 'white' }}>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top border-secondary">
                    <div className="col mb-3 d-flex align-items-center">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={Logo} alt="Ginfet Logo" width={250} />
                        </a>
                    </div>

                    <div className="col mb-3">
                        <h5 className="text-white">Contáctanos</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50"><i className="bi bi-telephone-fill me-2"></i>Teléfono 722845775</a></li>
                            <li className="nav-item mb-2"><a href="https://api.whatsapp.com/send?phone=56997876562" className="nav-link p-0 text-white-50"><i className="bi bi-whatsapp me-2"></i> Whatsapp +569 9787 6562</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50"><i className="bi bi-envelope-fill me-2"></i> consultas.ginfet@gmail.com</a></li>
                            <li className="nav-item mb-2"><a href="https://www.instagram.com/ginfet_eco5d/?hl=es-la" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-white-50"><i className="bi bi-instagram me-2"></i> Ginfet</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className="text-white">Ubicación</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-white-50"><i className="bi bi-geo-alt-fill me-2"></i> Bombero Villalobos, 1049 oficina 609. Rancagua</span></li>
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-white-50"><i className="bi bi-clock-fill me-2"></i>
                                Lun – Vie: 9:00am - 19:00pm</span></li>
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-white-50"><i className=""></i>
                                Sab y Dom: Cerrado </span></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <a href="https://goo.gl/maps/V4nGc4sAAzMra6Sr7" target="_blank" rel="noopener noreferrer">
                            <img src={Mapa} alt="Ubicación Mapa" className="img-fluid rounded border border-secondary" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )
}
