import React from 'react'
import { Footer } from './Footer'
import { NavLink } from 'react-router-dom'
// Importing an image for the first card. Adjust if a specific image is preferred.
import obstetriciaImg from '../imagenes/cobstetrica.jpeg'
import partoImg from '../imagenes/Parto.jpg'
import lactanciaImg from '../imagenes/Lactancia.png'
import monitorImg from '../imagenes/banner_ultrasound.png'
import pruebaImg from '../imagenes/test.jpeg'
import biopsiaImg from '../imagenes/banner_gynecology.png'
import citologiaImg from '../imagenes/citologias.jpeg'
import consultaImg from '../imagenes/Consulta.jpg'
import ecoImg from '../imagenes/Eco.png'
import ecoObstetricaImg from '../imagenes/banner_pregnancy.png'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Servicios = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container my-5 flex-grow-1">
                {/* Title */}
                <h1 className="text-center mb-5 display-4">Servicios</h1>

                {/* Services Carousel with Swiper */}
                <div className="mb-5 px-3">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        centeredSlides={false}
                        centerInsufficientSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            }
                        }}
                        style={{ paddingBottom: '3rem' }} // Space for pagination dots
                    >
                        {/* Card 1: Obstetricia */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={obstetriciaImg}
                                    className="card-img-top"
                                    alt="Obstetricia"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Consulta obstetrica (embarazo)</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Te acompañaremos y guiaremos  en todo el proceso perinatal, con todas las pruebas y controles necesarios para estar expectantes del crecimiento intraúterino de tu bebé. Te acompañaremos desde antes hasta después de tu embarazo
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 2: Partos */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={partoImg}
                                    className="card-img-top"
                                    alt="Partos"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Partos</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Atendemos tu parto de la forma más segura y evitando cualquier imprevisto , en las mejores clínicas de la región.  Te guiaremos, y te ayudaremos a evitar el dolor. Haremos  de tu parto la mejor experiencia.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 3: Lactancia */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={lactanciaImg}
                                    className="card-img-top"
                                    alt="Lactancia materna"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Lactancia materna</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Te guiaremos y ayudaremos a corregir posturas y técnicas para que tengas una lactancia efectiva.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 4: Monitor Fetal */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={monitorImg}
                                    className="card-img-top"
                                    alt="Monitor fetal"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Monitor fetal</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Monitor fetal externo de Advance, un solo ultrasonido con Nautilus US (bucle). Representa una nueva generación de monitores fetales diseñados para satisfacer las necesidades de control prenatal para el nuestros pacientes
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 5: Prueba de embarazo */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={pruebaImg}
                                    className="card-img-top"
                                    alt="Prueba de embarazo"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Prueba de embarazo</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Nos aseguraremos a ciencia cierta  de tu estado de embarazo
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 6: Biopsias ginecologicas */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={biopsiaImg}
                                    className="card-img-top"
                                    alt="Biopsias ginecologicas"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Biopsias ginecologicas</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Es un procedimiento diagnóstico que consiste en la extirpación de un fragmento de tejido de alguno de los órganos o tejidos para realizar un análisis del mismo.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 7: Citologías */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={citologiaImg}
                                    className="card-img-top"
                                    alt="Citologías"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Citologías</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Es un prueba que sirve para diagnósticar las lesiones precursoras o el propio cáncer cervicouterino.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 8: Consulta ginecológica */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={consultaImg}
                                    className="card-img-top"
                                    alt="Consulta ginecológica"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Consulta ginecológica</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Revisión médica preventiva y diagnóstica
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-5">
                    <a
                        href="https://app.salutem.cl/app/agenda-web/init/ginfet" target="_blank" rel="noopener noreferrer"
                        className="btn text-white fw-bold px-4 py-2"
                        style={{ backgroundColor: '#17a2b8' }}
                    >
                        RESERVA UNA CITA
                    </a>
                </div>

                {/* Section: Ecografías */}
                <h1 className="text-center mb-5 display-4">Ecografías</h1>

                {/* Ecografías Carousel with Swiper */}
                <div className="mb-5 px-3">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        centeredSlides={false}
                        centerInsufficientSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}
                        style={{ paddingBottom: '3rem' }} // Space for pagination dots
                    >
                        {/* Card 1: Ecografías ginecológicas */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={ecoImg}
                                    className="card-img-top"
                                    alt="Ecografías ginecológicas"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Ecografías ginecológicas (Transvaginal y abdominal) </h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Diagnóstico de patologías funcionales y estructurales a cualquier grupo etareo femenino.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 2: Ecografía mamaria */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={monitorImg}
                                    className="card-img-top"
                                    alt="Ecografía mamaria"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Ecografía mamaria</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.8rem' }}>
                                        Es una técnica diagnóstica que utiliza ondas de ultrasonidos imperceptibles al oído humanos, no invasiva ni dolorosa, se complementa con la mamografía para estudiar nódulos o mamás densas.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Card 3: Ecografías obstétricas */}
                        <SwiperSlide className="h-auto">
                            <div className="card h-100 border shadow-sm mx-2">
                                <img
                                    src={ecoObstetricaImg}
                                    className="card-img-top"
                                    alt="Ecografías obstétricas"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center p-3">
                                    <h5 className="card-title fw-bold mb-2">Ecografías obstétricas</h5>
                                    <div className="card-text text-muted text-start" style={{ fontSize: '0.8rem' }}>
                                        <p className="mb-2"><strong>• Ecografia 11-14 semanas:</strong> Doppler (descartar patologías incompatibles con la vida, trisomías cómo síndrome de Down y patologías asociados al embarazo)</p>
                                        <p className="mb-2"><strong>• Ecografia 22-24 semana:</strong> Doppler materno y morfología fetales : descartar malformaciones estructurales de el feto y predecir patologías asociadas e el embarazo.</p>
                                        <p className="mb-1"><strong>• Ecografías de III trimestre de embarazo.</strong></p>
                                        <p className="mb-1"><strong>• Ecografías morfológicas (3D | 4D | 5D Live)</strong></p>
                                        <p className="mb-1"><strong>• Ecografías de Perfil biofísico</strong></p>
                                        <p className="mb-0"><strong>• Ecografías de hemodinamia materno fetal</strong></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* CTA Button Ecografías */}
                <div className="text-center mb-5">
                    <a
                        href="https://app.salutem.cl/app/agenda-web/init/ginfet" target="_blank" rel="noopener noreferrer"
                        className="btn text-white fw-bold px-4 py-2"
                        style={{ backgroundColor: '#17a2b8' }}
                    >
                        RESERVA UNA CITA
                    </a>
                </div>



            </div>

            <Footer />
        </div >
    )
}
