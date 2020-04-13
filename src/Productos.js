import React, {useContext} from 'react';
import './css/Productos.css';
import {ProdContext} from './Context/ProdGuardados.js'
import Producto from './Producto.js'

const Productos = (props) => {
  const filtro = props.location.filtro;
  const [productos] = useContext(ProdContext); 

  function filtrar() {
    if (filtro === undefined){
      return productos;
    }
    return productos.filter(p => p.nombre.toLowerCase().includes(filtro));
  }

  return (
    <div className="App">
        <div id="elementos">
          {filtrar().map(prod => (<Producto prod={prod} key={prod.id}/>))}
        </div>
    </div>
  )
}

export default Productos;
