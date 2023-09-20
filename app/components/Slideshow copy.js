import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const images = [
    "images/wr1.png",
    "/images/wr2.png",
    "/images/wr3.png",
    "/images/wr4.png",
    "/images/wr5.png",
    "/images/wr6.png"
  ];

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]; 

  return (
    <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
          {/* <span>Slide 1</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          {/* <span>Slide 2</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          {/* <span>Slide 3</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[3]})` }}>
          {/* <span>Slide 4</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[4]})` }}>
          {/* <span>Slide 5</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[5]})` }}>
          {/* <span>Slide 6</span> */}
        </div>
      </div>                  
    </Slide>
  );
};

export default Slideshow;