import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
    <Carousel>
       {
        start.map((item, index) => {
          return(
            <Carousel.Item key={index} interval={1000} keyboard={true}>
              <img src={item}
              className='d-block w-100'
               alt="first-slide" />
            </Carousel.Item>
        )})
       }
    </Carousel>
  )
}

export default Slider