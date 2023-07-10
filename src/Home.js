import Carousel from 'react-bootstrap/Carousel';

import './cards/cards.css';


import './cards/cards.css';

import './home.css';
import Mycards from './cards/Cards';




 function Myhome() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp7732979.jpg"
          alt="First slide"
          width={80}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/5393409.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp4923992.png"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://cdn1.epicgames.com/ue/product/Screenshot/Slide1.PNG-1920x1080-160df0b6db5b5e9131397f6dbe8289d2.jpg?resize=1&w=1920"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <Mycards/>

  
    
  
  

    
    </>
  );
  }
   

export default  Myhome