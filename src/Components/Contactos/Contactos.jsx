import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


export const Contactos = () => {
  return (
    <Container className='row d-flex vh-100 
   justify-content-center'
   style={{ marginTop: '50px' }}>

      <Card className=' col-auto w-30 h-75 d-flex 
       '
      >
        <Card.Body>
        <Card.Header className='text-center fs-2'>Contactenos</Card.Header>
          <Card.Subtitle className="mb-3 mt-5 fs-5">Direccion:</Card.Subtitle>
          <Card.Text className='fs-5'>
            A. Los Procedes, Quinta Crespo 278 CP 3600
          </Card.Text>
          <Card.Subtitle className="mb-3 fs-5">Email:</Card.Subtitle>
          <Card.Text className='fs-5'>
            StarWars@gmail.com
          </Card.Text>
          <Card.Subtitle className="mb-3 fs-5">Telefono:</Card.Subtitle>
          <Card.Text className='fs-5'>
            +54113798645 /
            +54113798645
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link className='text-decoration-none' href="https://plus.google.com/TU_ID_GOOGLE?rel=author"><img  src="https://lh5.googleusercontent.com/-F_FBKktZWZk/T3nN0v4FeAI/AAAAAAAAAsc/7dHTxkxn4cI/s32/google32.png" alt="Siguenos en Google+"  style={{width:32, height:32}}   /></Card.Link>
          <Card.Link className='text-decoration-none' href="http://www.facebook.com"><img src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png" style={{width:32, height:32}}  alt="Síguenos en facebbok" /></Card.Link>
          <Card.Link className='text-decoration-none' href="http://twitter.com/"><img src="https://lh6.googleusercontent.com/--aIk2uBwEKM/T3nN1x09jBI/AAAAAAAAAs8/qzDsbw3kEm8/s32/twitter32.png" style={{width:32, height:32}}  alt="Síguenos en Twitter" /></Card.Link>
          <Card.Link className='text-decoration-none' href="http://instagram.com"><img src="https://lh5.googleusercontent.com/-vBqtz2iv2BE/UIqE3LQyFMI/AAAAAAAABgA/TJ4W-vIBjsc/s32/instagram32.png" style={{width:32, height:32}}  alt="Síguenos en instagram" /></Card.Link>  
        </Card.Footer>
      </Card>

    </Container>
  );
}



