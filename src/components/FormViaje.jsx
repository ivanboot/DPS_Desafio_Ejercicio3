import React from "react";
import { useState } from 'react';

const FormViaje = (props) => {

    const {
        destino,
        setDestino,
        cantPersona,
        setCantPersona,
        costoPaquete,
        setCostoPaquete,
        porcentaje,
        setPorcentaje,
        impuesto,
        setImpuesto,
        total,
        setTotal
    } = props;


    const handleChangeDestino = e => {
        setDestino(e.target.value)
    }

    const handleChangeCantidad = e => {
        setCantPersona(e.target.value)
    }

    const handleClick = () => {
        console.log("Destino: " + destino);
        console.log("Cantidad de personas: " + cantPersona);

        if (cantPersona < 0) {
            return;
        }

        var costo = 0;
        var porcen = 0;
        var impuest = 0;
        var costoTotal = 0;

        if (destino === "Panama") {
            costo = 197;
            porcen = 0.045;
            if (cantPersona == 2) {
                costo = 165;
            } else if (cantPersona >= 3 && cantPersona <= 4) {
                costo = 149;
            } else if (cantPersona >= 5) {
                costo = 129;
            }
        } else if (destino === 'Mexico') {
            porcen = 0.06;
            costo = 485;
            if (cantPersona == 2) {
                costo = 439;
            } else if (cantPersona >= 3 && cantPersona <= 4) {
                costo = 400;
            } else if (cantPersona >= 5) {
                costo = 380;
            }
        } else if (destino === 'Chile') {
            porcen = 0.07;
            costo = 198;
            if (cantPersona == 2) {
                costo = 178;
            } else if (cantPersona >= 3 && cantPersona <= 4) {
                costo = 158;
            } else if (cantPersona >= 5) {
                costo = 138;
            }
        } else if (destino === 'Peru') {
            porcen = 0.075;
            costo = 754;
            if (cantPersona == 2) {
                costo = 699;
            } else if (cantPersona >= 3 && cantPersona <= 4) {
                costo = 649;
            } else if (cantPersona >= 5) {
                costo = 629;
            }
        } else if (destino === 'Honduras') {
            porcen = 0.04;
            costo = 565;
            if (cantPersona == 2) {
                costo = 499;
            } else if (cantPersona >= 3 && cantPersona <= 4) {
                costo = 469;
            } else if (cantPersona >= 5) {
                costo = 449;
            }
        }

        impuest = (costo * porcen) * cantPersona;

        costo = (costo * cantPersona)

        costoTotal = (costo + impuest);



        setCostoPaquete(costo);
        setPorcentaje(porcen);
        setImpuesto(impuest);
        setTotal(costoTotal);


        console.log("Porcentaje " + porcentaje);
        console.log("Costo paquete " + costoPaquete);
        console.log("Impuesto " + impuesto);
        console.log("Total " + total);

    }

    return (
        <>
        <div className="row">
            <div className='col-5'>
                <h1>Planes de viaje</h1>
                <div className="row justify-content-center">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="">
                        <label htmlFor="destino" className="form-label">Seleccione su destino turístico</label>
                            <select required={true} className="form-select" name='destino' value={destino} onChange={handleChangeDestino}>
                                <option >Seleccione el una ciudad</option>
                                <option value="Panama">Ciudad de Panamá</option>
                                <option value="Mexico">Ciudad de México</option>
                                <option value="Chile">Santiago de Chile</option>
                                <option value="Peru">Machu Picchu Perú</option>
                                <option value="Honduras">Rotan Honduras</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="cantPersona" className="form-label">Ingredientes adicionales</label>
                            <input type="number" min={1} className="form-control" name='cantPersona' value={cantPersona} onChange={handleChangeCantidad} />
                        </div>
                        <button className="btn btn-primary col- mx-auto" onClick={handleClick} >Calcular costo</button>

                    </form>

                </div>
            </div>
            <div className="col-6">

            </div>
            </div>

        </>
    )
}

export default FormViaje;