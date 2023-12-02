import Button from 'react-bootstrap/Button';
import { useState } from "react";


const Buscador = ({colaborador, setEncontrado, setTabla}) =>{

    const [buscar, setBuscar]=useState("");
    
    const recibirDatos = () =>{
        hallar(buscar);
    }
    const hallar = (buscar) =>{
        const resultado = colaborador.filter((indice) => (indice.nombre == buscar || indice.id == buscar || indice.correo == buscar || indice.cargo == buscar || indice.telefono == buscar || indice.edad == buscar))[0];
        if(resultado.length != 0){
            const objetotabla = {
                id: "#",nombre:"Nombre",correo:"Correo",edad: "Edad",cargo:"Cargo",telefono:"Telefono",titulo:"Colaborador buscado"
            }
            setTabla(objetotabla);
            setEncontrado(resultado);

        }
        else{
            setEncontrado(false)
        }
      
    }

    return(
        <>
            <div>
                <input type="text" placeholder="Busca un colaborador" name='buscar_colaborador' onChange={(e) => {setBuscar(e.target.value)}}/>
                <Button variant="info" type="submit" onClick={recibirDatos} style={{marginBottom:"5px", marginLeft:"5px"}}>Buscar</Button>
            </div>
        </>
    );
}
export default Buscador;