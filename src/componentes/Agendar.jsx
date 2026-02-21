import React, { useEffect } from 'react'
import { Footer } from './Footer'

export const Agendar = () => {
    useEffect(() => {
        window.location.href = "https://app.salutem.cl/app/agenda-web/init/ginfet";
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container py-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="mb-4 text-secondary display-6 fw-bold">Redirigiendo al portal de reservas...</h2>
                <div className="spinner-border text-info mb-4" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="lead text-muted">
                    Si no eres redirigido automáticamente en unos segundos, <br />
                    <a href="https://app.salutem.cl/app/agenda-web/init/ginfet" className="text-info fw-bold text-decoration-none">
                        haz clic aquí para ir al portal
                    </a>.
                </p>
            </div>
            <Footer />
        </div>
    )
}
