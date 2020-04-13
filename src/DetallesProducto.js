import React, { useContext, useState} from 'react';
import './css/DetallesProducto.css';
import {Link} from 'react-router-dom';
import {ProdContext} from './Context/ProdGuardados.js'
import { CarrosContext } from './Context/CarrosGuardados';
import {ActualContext} from './Context/UsuarioActual.js'


const Detalles = (props) => {
  const [usuarioA] = useContext(ActualContext)
  const [productos] = useContext(ProdContext);
  const [carros, setCarros] = useContext(CarrosContext);
  const [input, setInput] = useState(1);
  const prod = productos[props.match.params.id];

  function existeEnCarro() {
    for(var i = 0; i < carros[usuarioA].length; i += 1) {
        if(carros[usuarioA][i].prod === prod.id) {
            return i;
        }
    }
    return -1;
  }

  function addCarro(cant) {
    const pos = existeEnCarro()
    if (pos === -1){
      let carroAux = carros[0];
      carroAux.push({prod: prod.id, cant: cant});
      let carrosAux = carros;
      carrosAux[0] = carroAux;
      setCarros(carrosAux);
      console.log(cant);
    }else {
      let carrosACambiar = carros;
      carrosACambiar[0][pos].cant = carrosACambiar[0][pos].cant + parseInt(cant, 10);
      setCarros(carrosACambiar);
    }
  }

  function acutalizarInput(event)  {
    setInput(event.target.value);
  }

  return (
    <div className="Detalles">
        <div id="elemento">
          <div id="detalles"> 
            <img src={prod.foto} alt=""></img>
            <div id="informacion">
              <h1>{prod.nombre}</h1>
              <p>{prod.descripcion}</p>
              <h4>{prod.ubicacion}</h4>
              <h3>$ {prod.precio}</h3>
              <div id="agregar">
              {usuarioA !== -1 ?
              <div>
              <input type="number" defaultValue="1" onChange={acutalizarInput} placeholder="Cantidad:"/>
              <Link to={{ pathname: "/carrito"}}><button onClick={() => addCarro(input)}>Agregar al carro</button></Link>
              </div> : <h3>Debe iniciar sesion para agregar a su carro</h3>}
              </div>
            </div>
          </div>
          <h4> </h4>
        </div>
    </div>
  )
}

export default Detalles;
