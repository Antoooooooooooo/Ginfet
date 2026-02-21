import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Inicio } from './componentes/Inicio'
import { Conocenos } from './componentes/Conocenos'
import { Servicios } from './componentes/Servicios'
import { Agendar } from './componentes/Agendar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="conocenos" element={<Conocenos />} />
          <Route exact path="servicios" element={<Servicios />} />
          <Route exact path="agendar" element={<Agendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
