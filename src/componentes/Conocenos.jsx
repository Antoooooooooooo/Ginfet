import React from 'react'
import { Footer } from './Footer'

import DSarabia from '../imagenes/DanielSarabia.jpg'
import ACanales from '../imagenes/AngelaCanales.jpg'
import VRosenthal from '../imagenes/ValentinaRosenthal.jpg'
import SZavala from '../imagenes/SandraZavala.jpg'
import AArevalo from '../imagenes/AlejandraArevalo.jpg'
import MAguilar from '../imagenes/MartaAguilar.jpg'
import Nadia from '../imagenes/Nadia.jpg'
import Kiara from '../imagenes/Kiara.jpg'
import HAcosta from '../imagenes/HAcosta.jpeg'

// Using this one or similar if needed, based on mockup looks like 4 + placeholder
// Note: Mockup shows 5 cards. The existing imports are 5 distinct people. 
// However, the mockup last card is a placeholder icon. 
// I will list the 4 identified doctors and then the placeholder as shown.
// Actually, I have 5 imports. I can try to match faces from mockup to imports if possible, or just list 4 and use the 5th if it matches, or use placeholder.
// The mockup shows:
// 1. Woman with glasses (Likely Alejandra Arevalo or similar?)
// 2. Woman with long dark hair (Angela Canales?)
// 3. Woman in white coat (Sandra Zavala?)
// 4. Man (Daniel Sarabia?)
// 5. Placeholder
// I will place the 4 existing active doctors and 1 placeholder to match the mockup exactly.

import EquipoImg from '../imagenes/Profesionales.jpg' // Or any generic image for the "Quiénes somos" main card. Using 'Profesionales.jpg' might be good, or 'Ginfet7.jpg'. Let's use a group one if available or GinfetLogo if not. 'Ginfet7.jpg' seems like a good candidate for a clinic shot or surgery shot. The mockup shows a surgery team. Ginfet7 or 4 likely. Let's use Ginfet5 or 7.

// Let's use Ginfet5.jpg for the "Misión y visión" card image as it looks like a medical procedure/team.
import MisionImg from '../imagenes/MisionVision.jpg' // Adjust if needed

export const Conocenos = () => {
  const profesionales = [
    { img: DSarabia, title: 'Dr Daniel Sarabia', text: '' },
    { img: ACanales, title: 'Dra Angela Canales', text: '' },
    { img: HAcosta, title: 'Dr Hernando Acosta', text: 'Radicado hace 12 años en Chile. Estudios de pregrado como Médico- cirujano  de la Universidad metropolitana de Barranquilla, Colombia. Egresado de la especialidad de Ginecología y Obstetricia de la Universidad de Chile el año 2018. Médico Gineco-Obstetra titular del hospital de Rengo' },
    { img: VRosenthal, title: 'Matrona Valentina Rosenthal', text: 'Egresada de la Universidad de Concepción de la carrera Obstetricia y Puericultura ganando así el título de Matrona el año 2016. Experiencia laboral en todas las clínicas de Rancagua y hospital Regional Rancagua.' },
    { img: AArevalo, title: 'Matrona Alejandra Arevalo', text: 'Matrona egresada con honores de la Universidad Mayor de la carrera de Obstetricia y Puericultura en el año 2011. Master en Lactancia Materna y con certificación IBCLC. Matrona con gran experiencia en el ámbito de la lactancia, asesorando y acompañando lactancias en el ámbito público y privado .' },
    { img: SZavala, title: 'Matrona Sandra Zavala', text: 'Matrona titulada de la Universidad de Concepción. Me dedico principalmente a la atención de embarazadas, preparto y post parto. Realizo ecografias obstétricas y ginecólogica. Cuento con 2 Diplomados en ecografía, el primero realizado en la Universidad Mayor el año 2013 y el segundo realizado el 2019, certificado por el MINSAL, realizado en la Universidad Austral. También tengo con un Diplomado en Salud Familiar y Diplomado en Salud Integral del Adolescente ambos certificados por la Universidad de Chile. Además de certificaciones varias en procedimientos de inserción y extracción de métodos anticonceptivos de larga duración' },
    { img: MAguilar, title: 'Matrona Marta Aguilar', text: '' },
    { img: Nadia, title: 'Nadia', text: '' },
    { img: Kiara, title: 'Kiara', text: '' },


  ]

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">

        {/* Section: Quiénes somos */}
        <h1 className="text-center mb-5 display-5">Quiénes somos</h1>

        <div className="card mb-5 border shadow-sm">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={MisionImg} className="img-fluid w-100 h-100" alt="Equipo médico" style={{ objectFit: 'cover', minHeight: '300px' }} />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h3 className="card-title fw-bold">Somos un equipo de jóvenes profesionales altamente cualificados en el ámbito de la Ginecología y Obstetricia, dedicados a brindar una atención excepcional a nuestras pacientes.
                  Utilizamos equipos de última generación, aprobados por la FDA en Estados Unidos, para ofrecer diagnósticos precisos y tratamientos de la más alta calidad. Esto nos permite brindar niveles sobresalientes de seguridad y efectividad en cada atención que ofrecemos.</h3>
                {/* <p className="card-text">...</p>  Mockup just shows the big bold text */}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Profesionales */}
        <h2 className="text-center mb-5 display-6">Profesionales</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">

          {profesionales.map((prof, index) => (
            <div className="col" key={index}>
              <div className="card h-100 border shadow-sm">
                <img src={prof.img} className="card-img-top w-100 mx-auto d-block" alt={prof.title} style={{ aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'top' }} />
                <div className="card-body text-center p-2">
                  <h6 className="card-title fw-bold mb-1">{prof.title}</h6>
                  <p className="card-text small text-muted">{prof.text}</p>
                </div>
              </div>
            </div>
          ))}


        </div>

      </div>
      <Footer />
    </div>
  )
}
