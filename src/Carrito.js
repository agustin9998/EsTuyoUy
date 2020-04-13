import React, { useContext, useState, useEffect, useCallback } from 'react';
import './css/Carrito.css';
import ElementoCarro from './ElementoCarro.js';
import {CarrosContext} from './Context/CarrosGuardados.js';
import {ProdContext} from './Context/ProdGuardados.js';
import {ActualContext} from './Context/UsuarioActual.js';
import {Link} from 'react-router-dom';

const Carrito = (props) => {
  const [usuarioA] = useContext(ActualContext);
  const [productos] = useContext(ProdContext);
  const [carros, setCarros] = useContext(CarrosContext);
  const [precioTotal, setPrecio] = useState(0);
  const [habilitar, setHabilitar] = useState(false);

  const vacio = useCallback(() => {
    if (carros[usuarioA] !== undefined){
      if (carros[usuarioA][0] !== undefined) {
        setHabilitar(true);
      }else {
        setHabilitar(false);
      }
    }else {
      setHabilitar(false);
    }
  }, [carros, usuarioA]);

  const productosById = useCallback((id) => {
    const prod = productos[id];
    return prod;
  }, [productos]);

  const handleCheckout = () => {
    let carroVacio = [];
    let carrosAux = carros;
    carrosAux[usuarioA] = carroVacio;
    setCarros(carrosAux);
    alert("Se a procesado su pedido!")
  }

  function borrarElemento(id) {
    let carroAux = carros[usuarioA];
    let pos = carroAux.indexOf(id);
    carroAux.splice(pos, 1);
    let carrosAux = carros;
    carrosAux[usuarioA] = carroAux;
    setCarros(carrosAux);
  }
  
  const sumarPrecio = useCallback(() => {
    if (carros[usuarioA] !== undefined){
      let suma = 0;
      carros[usuarioA].map(p => suma += parseInt(productosById(p.prod).precio)*p.cant);
      return suma;
    }
    return 0;
  }, [carros, usuarioA, productosById]);

  useEffect(() => {
    setPrecio(sumarPrecio);
    vacio();
  }, [sumarPrecio, vacio]);
  
  return (
    <div className="carrito">
        <div id="carro">
          {usuarioA !== -1 ?
          <div>
            <div id="compras">
              {carros[usuarioA][0] !== undefined ? carros[usuarioA].map(p => <ElementoCarro prod={productosById(p.prod)} key={p.prod} borrar={borrarElemento} cant={p.cant}/>)  
              : <h4>No tiene productos en su carro</h4>}
              <h4> </h4>
            </div>
            <div id="checkout">
              <h1>Total: $ {precioTotal}</h1>
              <Link to="/carrito" id={habilitar ? "checkoutHabilitado" : "checkoutDeshabilitado"} onClick={handleCheckout}>CheckOut</Link>
            </div>
          </div>
          : <h4>Debe iniciar sesion para ver su carro</h4>}
        </div>
    </div>
  )
}

export default Carrito;
