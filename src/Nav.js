import React, { useState } from 'react';
import './css/Nav.css';
import {Link} from 'react-router-dom';

const Nav = ({handleClick, usuarios, usuarioA}) => {
  const [input, setInput] = useState("");

  const cambiarInput = (event) => {
    setInput(event.target.value.toLowerCase())
  }

  return (
    <div className="Nav">
      <div id="header">
        <img id="userMovil" src={require("./img/User.png")} height="30px" width="30px" onClick={handleClick}/>
        <Link className="nav-Links" to="/"><h1>ESTUYO_UY</h1></Link>
        <div id="buscando">
          <form className="form">
            <input type="text" className="buscar" onChange={cambiarInput}></input>
            <Link to={{ pathname: "/", filtro: input}}><button id="bBuscar">Buscar</button></Link>
          </form>
        </div>
        <ul id="compu">
          <li><Link className="nav-Links" to="/vender">Vender</Link></li>
          <li><Link className="nav-Links" to="/carrito">Carrito</Link></li>
          <li>{usuarioA != -1 ? <h3 onClick={handleClick}>Hola {usuarios[usuarioA].usuario}!</h3> : <button onClick={handleClick}>Iniciar sesion</button>}</li>
        </ul>
        <Link className="nav-Links-Movil-vender" to="/vender"><img src={require("./img/Vender.png")} height= "40px" width="40px"/></Link>
        <Link className="nav-Links-Movil-Carro" to="/carrito"><img src={require("./img/Carro.png")} height= "40px" width="40px"/></Link>
      </div>
    </div>
  )
}

export default Nav;
