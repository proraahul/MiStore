import React from 'react';
import { Carousel, CarouselCaption} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({banner}) => {
  return (
    <Carousel>
       {
        banner.map((item, index) => {
          return(
            <Carousel.Item key={item.image} id='banner' interval={1000} keyboard={true}>
              <img src={item.image}
              className='d-block w-100'
              id='banner-image'
               alt={`${index} banner`} />
               <CarouselCaption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read more</u>
                </CarouselCaption>
            </Carousel.Item>
        )})
       }
    </Carousel>
  )
}

export default Banner