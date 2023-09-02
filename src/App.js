import logo from './logo.svg';
import './App.css';
import FormViaje from './components/FormViaje';
import { useState } from 'react';

function App() {

  const[destino,setDestino] = useState('');
  const[cantPersona,setCantPersona] = useState(0);
  const[costoPaquete,setCostoPaquete] = useState(0);
  const[porcentaje,setPorcentaje] = useState(0.0);
  const[impuesto,setImpuesto] = useState(0.0);
  const[total,setTotal] = useState(0.0);


  return (
    <div className="container">
      <FormViaje
        destino = {destino}
        setDestino = {setDestino}
        cantPersona = {cantPersona}
        setCantPersona ={setCantPersona}
        costoPaquete = {costoPaquete}
        setCostoPaquete = {setCostoPaquete}
        porcentaje = {porcentaje}
        setPorcentaje={setPorcentaje}
        impuesto = {impuesto}
        setImpuesto = {setImpuesto}
        total = {total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
