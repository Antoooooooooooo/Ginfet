import React from 'react'
import Parto from '../imagenes/Parto.jpg'


export const Reservaparto = () => {
    return (
        <div className="container mt-5">

            <div className="row row-cols-1 row-cols-md-1 g-3">
                <div className="col">
                    <div className="card shadow border-0">
                        <div className="card-body">
                            <h5 className="card-title text-center display-6 mb-4">Tu parto o cesarea en las mejores clinicas de Rancagua</h5>
                        </div>
                        <img src={Parto} className="img-fluid w-100 rounded" alt="No encontrada" style={{ maxHeight: '600px', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
