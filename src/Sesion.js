import React, { useState, useContext } from 'react';
import './css/Sesion.css';
import {ActualContext} from './Context/UsuarioActual.js'
import {Link} from 'react-router-dom';

const Sesion = ({iluminated, setIluminated, usuarios}) => {
  const [input, setInput] = useState({usuario: '', contraseña: ''})
  const [usuarioA, setActual] = useContext(ActualContext)

  const actualizarInput = ({target}) => {
    var inputAux = input;
    inputAux[target.name] = target.value;
    setInput(inputAux);
  }

  function existeUSusario() {
    for(var i = 0; i < usuarios.length; i += 1) {
        if(usuarios[i].usuario === input.usuario && usuarios[i].contraseña === input.contraseña) {
            return i;
        }
    }
    return -1;
  }

  const iniciarSesion = () => {
    var pos = existeUSusario();
    if (pos !== -1){
      setActual(pos);
      setIluminated(false);
    }
  }

  return (
    <div className="Sesion">
      <div id={iluminated ? 'sesion' : 'sesionOculta'}>
        <h1>Iniciar sesion</h1>
        <input type="text" name="usuario" onChange={actualizarInput} placeholder="Usuario:"></input>
        <input type="password" name="contraseña" onChange={actualizarInput} placeholder="Contraseña:"></input>
        <h2>No tienes una cuenta? Registrate!</h2>
        <Link to="#"><button onClick={iniciarSesion}><h4>Iniciar sesion</h4></button></Link>
      </div>
    </div>
  )
}

export default Sesion;
