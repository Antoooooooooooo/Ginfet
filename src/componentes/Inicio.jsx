import React from 'react'
import { Footer } from './Footer'
import Parto from '../imagenes/Parto.jpg'
import { NavLink } from 'react-router-dom'
import Ginecologia from '../imagenes/banner_gynecology.png'
import Eco from '../imagenes/banner_ultrasound.png'
import Embarazo from '../imagenes/banner_pregnancy.png'

export const Inicio = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <main className="flex-grow-1">

        {/* Section: Nuestros Servicios */}
        <section className="py-5 text-center">
          <h2 className="mb-5 display-4 fw-bold" style={{ fontFamily: "'Montserrat', sans-serif", color: '#004e64' }}>Nuestros Servicios</h2>

          {/* Custom Carousel-like Grid */}
          {/* Custom Carousel-like Grid */}

          {/* Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide mb-5 mx-auto" style={{ width: '100%', maxWidth: '1200px' }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded shadow">
              <div className="carousel-item active">
                <img src={Ginecologia} className="d-block w-100" alt="Ginecología" style={{ aspectRatio: '16/9', objectFit: 'cover', maxHeight: '550px' }} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
                  <h5>Ginecología Integral</h5>
                  <p>Cuidado especializado para la salud de la mujer en todas las etapas de su vida.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Eco} className="d-block w-100" alt="Ecografías" style={{ aspectRatio: '16/9', objectFit: 'cover', maxHeight: '550px' }} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
                  <h5>Ecografías 3D/4D</h5>
                  <p>Tecnología de última generación para ver el crecimiento de tu bebé.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Embarazo} className="d-block w-100" alt="Obstetricia" style={{ aspectRatio: '16/9', objectFit: 'cover', maxHeight: '550px' }} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
                  <h5>Control de Embarazo</h5>
                  <p>Acompañamiento profesional y cercano durante tu gestación.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <NavLink to="/servicios" className="btn btn-lg text-white px-5 py-3 fs-4 fw-bold" style={{ backgroundColor: '#17a2b8' }}>
            VER TODOS
          </NavLink>
        </section>

        {/* Section: Parto/Cesárea */}
        <section className="container py-5 mb-5">
          <div className="row flex-column align-items-center justify-content-center g-5">
            <div className="col-12 col-md-10 text-center">
              <img src={Parto} alt="Parto o Cesárea" className="img-fluid shadow-sm rounded" style={{ maxHeight: '600px', objectFit: 'cover', width: '100%' }} />
            </div>
            <div className="col-12 col-md-8 text-center mt-4">
              <h3 className="mb-4 display-6" style={{ color: '#17a2b8' }}>
                tu parto o cesárea <br />
                en las mejores clínicas de Rancagua
              </h3>
              <a href="https://app.salutem.cl/app/agenda-web/init/ginfet" target="_blank" rel="noopener noreferrer" className="btn text-white fw-bold px-5 py-3 fs-5" style={{ backgroundColor: '#17a2b8' }}>
                RESERVA UNA CITA <i className="bi bi-calendar-event ms-2"></i>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div >
  )
}
