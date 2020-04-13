import React, {useState, useContext} from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './Productos.js';
import Nav from './Nav.js';
import Sesion from './Sesion.js';
import Carrito from './Carrito.js';
import Vender from './Vender.js';
import Detalles from './DetallesProducto.js';
import {ProdDelivery} from './Context/ProdGuardados.js'
import {CarrosDelivery} from './Context/CarrosGuardados.js'
import {ActualContext} from './Context/UsuarioActual.js'


const App = () => {
  const [ iluminated, setIluminated ] = useState(false);
  const [usuarioA, setActual] = useContext(ActualContext)
  const [usuarios] = useState( 
    [{
        usuario: "agustin9998",
        contraseña: "123456"
    },
    {
        usuario: "estuyo",
        contraseña: "54321"
    },
    {
        usuario: "usuario",
        contraseña: "react"
    }
    ]);

    const cerrarSesion = () => {
      setActual(-1);
      setIluminated(false)
    }

  return (
    <div className="App">
      <div id={iluminated ? usuarioA !== -1 ? "fInhabilitado" : 'fOscurecido' : 'fIluminado'} onClick={() => setIluminated(false)}></div>
      <Router>
        <Nav handleClick={() => setIluminated(true)} usuarios={usuarios} usuarioA={usuarioA}/>
        <Switch>
          <ProdDelivery>
            <CarrosDelivery>
              <Route path="/" exact component={Productos}/>
              <Route path="/carrito" exact component={Carrito}/>
              <Route path="/vender" exact component={Vender}/>
              <Route path="/producto/:id" exact component={Detalles}/>
            </CarrosDelivery>
          </ProdDelivery>
        </Switch>
      {usuarioA !== -1 ? <div id={iluminated ? "campoUsuarioI" : "campoUsuarioO"}><div className="arrow-up"/><div id="campoCerrarSesion">
        <h4 onClick={cerrarSesion}>Cerrar sesion</h4></div></div> 
      : <Sesion iluminated={iluminated} setIluminated={setIluminated} usuarios={usuarios} setActual={setActual}/>}
      </Router>
    </div>
  )
}

export default App;
