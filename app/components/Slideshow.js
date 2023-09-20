import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide as Slideshow} from 'react-slideshow-image';
import Slide from './Slide'


const SlideshowContainer = (props) => {
  const { feeds } = props;
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
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 
      }
    }
  ]; 

  console.log('FEEDS...', feeds)

  return (
    <Slideshow slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
      { feeds.map(feed => <Slide key={feed.id} feed={feed} /> )}
    </Slideshow>
    // <>
    //   { feeds.map(feed => <Slide key={feed.id} feed={feed} /> )}
    // </>
  );
};

export default SlideshowContainer;