import Carousel from 'react-bootstrap/Carousel';
import imagenes from '../../assets/img/imagenes'



export function Header() {
  return ( 
  <div className='row'>
    <div className='col '>
    <Carousel fade className='controls-false'>
    <Carousel.Item className='' interval={1000}>
      <img
        className=" image d-block img-fluid h-25%"
        src= {imagenes.img1}
        alt="First slide"
      /> 
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="image d-block img-fluid h-25%"
        src={imagenes.img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className=" image d-block img-fluid h-25%"
        src={imagenes.img3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  </div>




  )
}

