import React from 'react';
import './css/Productos.css';
import {Link} from 'react-router-dom';

const Producto = ({prod}) => {
  return (
    <div className="Prod">
        <div id="elementos">
          <Link to={{ pathname: "/producto/" + prod.id}}><div className="producto">
            <img src={prod.foto} alt=""></img>
            <h1>{prod.nombre}</h1>
            <h3>{prod.ubicacion}</h3>
            <h4>${prod.precio}</h4>
          </div></Link>
          <h4> </h4>
        </div>
    </div>
  )
}

export default Producto;