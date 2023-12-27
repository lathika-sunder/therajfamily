import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import familyImage1 from '../../assets/family-image-1.jpg';
import familyImage2 from '../../assets/family-image-2.jpg';
import familyImage3 from '../../assets/family-image-3.jpg';
import familyImage4 from '../../assets/family-image-4.jpg';
import './CarouselComp.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CarouselComp = () => {

  const images = [familyImage1, familyImage2, familyImage3, familyImage4];

 
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibilty:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

 
  return (
    <div className='carousel'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="carousel-image" src={image} alt={`Family Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CarouselComp;
