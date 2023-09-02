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

         if (destino === "Panama") {
            setCostoPaquete(197);
            setPorcentaje(0.045); 
            if(cantPersona==2){
                setCostoPaquete(165);
            }else if(cantPersona<=4){
                setCostoPaquete(149);
            }else if(cantPersona>=5){
                setCostoPaquete(129);
            }
        }else if (destino === 'Mexico') {
            setPorcentaje(0.06);
            setCostoPaquete(485);
            if(cantPersona==2){
                setCostoPaquete(439);
            }else if(cantPersona<=4){
                setCostoPaquete(400);
            }else if(cantPersona>=5){
                setCostoPaquete(380);
            }
        }else if (destino === 'Chile') {
            setPorcentaje(0.07);
            setCostoPaquete(198);
            if(cantPersona==2){
                setCostoPaquete(178);
            }else if(cantPersona<=4){
                setCostoPaquete(158);
            }else if(cantPersona>=5){
                setCostoPaquete(138);
            }
        }else if (destino === 'Peru') {
            setPorcentaje(0.075);
            setCostoPaquete(754);
            if(cantPersona==2){
                setCostoPaquete(699);
            }else if(cantPersona<=4){
                setCostoPaquete(649);
            }else if(cantPersona>=5){
                setCostoPaquete(629);
            }
        }else if (destino === 'Honduras') {
            setPorcentaje(0.04);
            setCostoPaquete(565);
            if(cantPersona==2){
                setCostoPaquete(499);
            }else if(cantPersona<=4){
                setCostoPaquete(469);
            }else if(cantPersona>=5){
                setCostoPaquete(449);
            }
        }
        
        setCostoPaquete((costoPaquete * cantPersona));

        setImpuesto((costoPaquete * porcentaje) * cantPersona );

        setTotal((costoPaquete + impuesto));

        console.log("Porcentaje "+porcentaje);
        console.log("Costo paquete "+costoPaquete);
        console.log("Impuesto "+impuesto);
        console.log("Total "+ total);
    }

    return (
        <>
            <div className='container'>
                <h1>Planes de viaje</h1>
                <div className="row justify-content-center">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="col-6">
                            <select required={true} className="form-select" name='destino' value={destino} onChange={handleChangeDestino}>
                                <option >Seleccione el una ciudad</option>
                                <option value="Panama">Ciudad de Panamá</option>
                                <option value="Mexico">Ciudad de México</option>
                                <option value="Chile">Santiago de Chile</option>
                                <option value="Peru">Machu Picchu Perú</option>
                                <option value="Honduras">Rotan Honduras</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="ingredienteAdd" className="form-label">Ingredientes adicionales</label>
                            <input type="number" min={1} className="form-control" name='cantPersona' value={cantPersona} onChange={handleChangeCantidad} />
                        </div>
                        <button className="btn btn-primary" onClick={handleClick} >Enviar</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default FormViaje;