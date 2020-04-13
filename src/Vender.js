import React, { useContext, useState } from 'react';
import './css/Vender.css';
import {Link} from 'react-router-dom';
import {ProdContext} from './Context/ProdGuardados.js'
import {ActualContext} from './Context/UsuarioActual.js'

const Vender = () => {
  const [usuarioA] = useContext(ActualContext)
  const [habilitar, setHabilitar] = useState(false);
  const [productos, setProductos] = useContext(ProdContext);
  const [input, setInput] = useState(
    {
      nombre: "",
      precio: "",
      descripcion: "",
      ubicacion: "",
      foto: '',
      id: productos.length
    }
  )

  function completo () {
    if (input.nombre !== "" && input.precio !== "" && input.descripcion !== "" && input.ubicacion !== "" && input.foto !== '') {
      setHabilitar(true);
    }else{
      setHabilitar(false);
    }
  }

  const ActualizarInput = ({target}) => {
    var inputAux = input;
    inputAux[target.name] = target.value;
    setInput(inputAux);
    completo();
  }

  const ActualizarFoto = ({target}) => {
    var inputAux = input;
    inputAux[target.name] = "./img/" + target.files.name;
    setInput(inputAux);
    completo();
  }

  const addProd = () => {
    var productosAux = productos;
    productosAux.push(input);
    setProductos(productosAux);
    console.log(productosAux);
  }
  
  return (
    <div className="vender">
        <div id={usuarioA != -1 ? "altaProducto" : "dIniciar"}>
          {usuarioA != -1 ?
          <div> 
            <h1>Vende Tu Producto</h1>
            <div id="campos">
              <input type="file" name="foto" id="img" size="60" onChange={ActualizarFoto} required></input>
              <img src={require("./img/imagenes.PNG")} alt=""/>
              <input type="text" className="Descripcion" name="nombre" placeholder="Nombre articulo:" onChange={ActualizarInput} required/>
              <input type="number" className="Descripcion" name="precio" placeholder="Precio: $" onChange={ActualizarInput} required/>
              <input type="text" className="Descripcion" name="descripcion" placeholder="Descripcion:" onChange={ActualizarInput} required/>
              <input type="text" className="Ubicacion" name="ubicacion" placeholder="Ubicacion, Pais:" onChange={ActualizarInput} required/>
              <Link to="/" id={habilitar ? "venderHabilitado" : "venderDeshabilitado"} onClick={addProd}>Vender</Link>
            </div>
          </div>
          : <h4>Porfavor ingresa sesion para podes vender un articulo.</h4>}
        </div>
    </div>
  )
}

export default Vender;
