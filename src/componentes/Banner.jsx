import React from 'react'
import Ginecologia from '../imagenes/banner_gynecology.png'
import Eco from '../imagenes/banner_ultrasound.png'
import Embarazo from '../imagenes/banner_pregnancy.png'

export const Banner = () => {
    return (
        <div className="container mt-5" >
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Ginecologia} className="d-block w-100" alt="Ginecología" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ginecología Integral</h5>
                            <p>Cuidado especializado para la salud de la mujer en todas las etapas de su vida.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Eco} className="d-block w-100" alt="Ecografías" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ecografías 3D/4D</h5>
                            <p>Tecnología de última generación para ver el crecimiento de tu bebé.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Embarazo} className="d-block w-100" alt="Obstetricia" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Control de Embarazo</h5>
                            <p>Acompañamiento profesional y cercano durante tu gestación.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
