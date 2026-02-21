import React from 'react'
import logo from '../imagenes/GinfetLogo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#004e64' }}>
                <div className="container-fluid">

                    <NavLink to="/">
                        <img src={logo} width={210} alt="No encontrada" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <h4><NavLink to="/" className="nav-link text-white text-center fw-bold">INICIO</NavLink></h4>
                            <h4><NavLink to="/conocenos" className="nav-link text-white text-center fw-bold">CONOCENOS</NavLink></h4>
                            <h4><NavLink to="/servicios" className="nav-link text-white text-center fw-bold">NUESTROS SERVICIOS</NavLink></h4>
                        </div>
                        <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
                            <a href="https://api.whatsapp.com/send?phone=56997876562" target="_blank" rel="noopener noreferrer" className="btn btn-info text-white">
                                CONVERSEMOS <i className="bi bi-whatsapp ms-1"></i>
                            </a>
                            <a href="https://app.salutem.cl/app/agenda-web/init/ginfet" target="_blank" rel="noopener noreferrer" className="btn btn-info text-white">
                                RESERVA UNA CITA <i className="bi bi-calendar-event ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
