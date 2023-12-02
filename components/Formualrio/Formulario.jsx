import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, Form} from 'react-bootstrap';

const Formulario = ({setMensaje, setColor, colaborador, setColaborador}) =>{

    const [nombre, setNombre]=useState("");
    const [correo, setCorreo]=useState("");
    const [edad, setEdad]=useState("");
    const [cargo, setCargo]=useState("");
    const [telefono, setTelefono]=useState("");

    const enviarFormulario = (e) =>{
        e.preventDefault();
        const respuesta = validar ();

        if (!respuesta) {
            setMensaje("¡Debe ingresar todos los campos!");
            setColor("danger");
        }
        else if(respuesta) {
            setMensaje("¡Colaborador guardado correctamente!");
            setColor("success");
            const objetonuevocolaborador = {
                id: colaborador.length + 1,
                nombre,
                correo,
                edad,
                cargo,
                telefono
            }
            setColaborador([...colaborador, objetonuevocolaborador]);
            setNombre("");
            setCargo("");
            setCorreo("");
            setEdad("");
            setTelefono("");
        }
    }

    const validar = () =>{

        if(correo == 0 || nombre == 0 || edad == 0 || cargo == 0 || telefono == 0)
            return (false);
        else
            return(true);
    }

    const limpiar = () =>{
        if(correo.length != 0 || nombre.length != 0 || edad.length != 0 || cargo.length != 0 || telefono.length != 0){
            setMensaje("");
            setColor("");
        }
    }



    return(
        <>
           <div>
           <div>
                <h3>Agregar Colaborador</h3>
            </div>
            <div className="container">
                <form onSubmit={enviarFormulario}>
                    <div className="row">
                    <div className="col-md-6 mt-3 col-lg-12">
                        <input className="input" type="text" name="nombre" value={nombre} placeholder="Nombre" onChange={(e) => {setNombre(e.target.value); limpiar()} } />
                    </div>
                    <div className="col-md-6 mt-3 col-lg-12">
                        <input className="input" type="email" name="correo" value={correo} placeholder="Correo" onChange={(e) => {setCorreo(e.target.value); limpiar()}}/>
                    </div>
                    <div className="col-md-6 mt-3 col-lg-12">
                        <input className="input" type="text" name="edad" value={edad}  placeholder="Edad" onChange={(e) => {setEdad(e.target.value); limpiar()}}/>
                    </div>
                    <div className="col-md-6 mt-3 col-lg-12">
                        <input className="input" type="text" name="cargo" value={cargo} placeholder="Cargo" onChange={(e) => {setCargo(e.target.value); limpiar()}}/>
                    </div>
                    <div className="col-lg-12 col-md-12 mt-3">
                        <input className="input" type="text" name="telefono" value={telefono} placeholder="Telefono" onChange={(e) => {setTelefono(e.target.value); limpiar()}}/>
                    </div>
                    <div className="col-lg-12 col-md-12 mt-3">
                        <Button variant="primary" type="submit" className="input">Agregar</Button>
                    </div>
                    </div>
                </form>
            </div>     
           </div>
        </>
    );
}
export default Formulario;