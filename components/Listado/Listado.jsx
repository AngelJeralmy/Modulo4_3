import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Listado = ({colaborador, borrarcolaborador}) =>{

   return(
    <>
       <div className='table-responsive' style={{overflowY:"scroll", height:"250px"}}>
       <Table striped bordered hover variant="">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                    <th>Eliminar Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {colaborador.map(colaborador => 

                <tr key={colaborador.id}>

                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td><Button variant="danger" onClick={() => {borrarcolaborador(colaborador.id)}}>Eliminar</Button></td>

                </tr>)}
            </tbody>
        </Table>
       </div>
    </>
   );
}

export default Listado;