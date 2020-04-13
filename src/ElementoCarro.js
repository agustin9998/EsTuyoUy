import React from 'react';
import './css/Carrito.css';
import {Link} from 'react-router-dom';

const ElementoCarro = ({prod, borrar, cant}) => {
  return (
          <div className="compra">
            <img src={prod.foto} alt=""></img>
            <h1>{prod.nombre}</h1>
            <h2>$ {cant} X {prod.precio}</h2>
            <Link to="/carrito"><button onClick={() => borrar(prod.id)}>X</button></Link>
          </div>
  )
}

export default ElementoCarro;
