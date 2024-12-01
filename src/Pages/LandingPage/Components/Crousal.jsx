import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Components/images/crousal1.jpg'; // First slide image
import image2 from '../Components/images/t6.jpg'; // Second slide image
import image3 from '../Components/images/t1.jpg'; // Third slide image
import image4 from '../Components/images/t2.jpg'; // Third slide image
import image5 from '../Components/images/t5.jpg'; // Third slide image
import image6 from '../Components/images/t4.jpg'; // Third slide image


function Crousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '500px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
        />
        <Carousel.Caption>
          {/* <h3>fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousal;
