import Alert from 'react-bootstrap/Alert';

const Aviso = ({mensaje, color}) =>{

    return(
        <>
            <Alert variant={color}>
                {mensaje}
            </Alert>
        </>
    );
}

export default Aviso;