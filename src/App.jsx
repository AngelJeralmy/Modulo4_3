import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BaseColaboradores} from '../components/BaseColaboradores/BaseColaboradores';
import Listado from '../components/Listado/Listado';
import { useState } from 'react';
import Formulario from '../components/Formualrio/formulario';
import Aviso from '../components/Aviso/Aviso';
import Buscador from '../components/Buscador/Buscador';
import Encontrado from '../components/Encontrado/Encontrado';
import {Container, Row, Col, Form} from 'react-bootstrap';

function App() {

  const [colaborador, setColaborador]=useState(BaseColaboradores);
  const [mensaje, setMensaje]=useState("");
  const [color, setColor]=useState("");
  const [encontrado, setEncontrado]=useState({});
  const [tabla, setTabla]=useState({});

  
  const borrarcolaborador = (borrar) =>{
    const nuevaRenderizacion = colaborador.filter(indice => (indice.id != borrar))
    console.log(nuevaRenderizacion)
    setColaborador(nuevaRenderizacion);
}
  

  return( 
    <>
      <div className='container' style={{width:"90vw"}}>
        <div className="row">
          <div className='col-12 col-sm-12 col-md-12 col-lg-8' style={{marginBottom:"50px"}}>
            <Buscador colaborador={colaborador} setEncontrado={setEncontrado} setTabla={setTabla}/>
            <Listado colaborador={colaborador} borrarcolaborador={borrarcolaborador}/>
            <Encontrado encontrado={encontrado} tabla={tabla}/>
          </div>
          <div className='offset-md-2 offset-lg-1 offset-sm-3 offset-2 col-md-8 col-lg-3 col-sm-7 col-8'>
            <div>
              <Formulario setMensaje={setMensaje}  setColor={setColor} colaborador={colaborador} setColaborador={setColaborador} />
              <Aviso mensaje={mensaje} color={color} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
