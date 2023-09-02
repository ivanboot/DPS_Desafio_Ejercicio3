import React from 'react'

const Result = (props) => {
    //Haciendo destructuring para obtener lo que viene por props
    const {
        destino,
        cantPersona,
        costoPaquete,
        porcentaje,
        impuesto,
        total
    } = props;

    return (
        <>
            <table className="table table-bordered table-hover table-primary col-5" >
                <thead>
                    <tr>
                        <th scope="col">Concepto</th>
                        <th scope="col">Contenido</th>
                    </tr>
                </thead>
                <tbody className='table-light'>
                    <tr>
                        <th scope="row">Destino de viaje</th>
                        <td>{destino}</td>
                    </tr>
                    <tr>
                        <th scope="row">Cantidad de personas</th>
                        <td>{cantPersona}</td>
                    </tr>

                    <tr>
                        <th scope="row">Costo total del viaje para {cantPersona} personas </th>
                        <td>${costoPaquete.toFixed(2)} </td>
                    </tr>

                    <tr>
                        <th scope="row">Porcentaje de impuesto por ciudad destino</th>
                        <td>{porcentaje * 100}%</td>
                    </tr>

                    <tr>
                        <th scope="row">Impuesto total del viaje por {cantPersona} personas </th>
                        <td>${impuesto.toFixed(2)}</td>
                    </tr>

                    <tr>
                        <th scope="row">Costo total del viaje</th>
                        <td>${total.toFixed(2)}</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default Result