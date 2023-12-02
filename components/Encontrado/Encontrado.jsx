import Table from 'react-bootstrap/Table';

const Encontrado = ({encontrado, tabla}) => {
    return(
        <>
           <div className='encontrado table-responsive' style={{marginTop:"40px", overflowX:"scroll"}}>
           <h2 style={{marginBottom:"15px"}}>{tabla.titulo}</h2>
            <Table striped bordered hover variant="">
                <thead>
                    <tr>
                        <th>{tabla.id}</th>
                        <th>{tabla.nombre}</th>
                        <th>{tabla.correo}</th>
                        <th>{tabla.edad}</th>
                        <th>{tabla.cargo}</th>
                        <th>{tabla.telefono}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{encontrado.id}</td>
                        <td>{encontrado.nombre}</td>
                        <td>{encontrado.correo}</td>
                        <td>{encontrado.edad}</td>
                        <td>{encontrado.cargo}</td>
                        <td>{encontrado.telefono}</td>
                    </tr>
                </tbody>
            </Table> 
           </div>
        </>
    );
}
export default Encontrado;