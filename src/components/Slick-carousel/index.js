import React from 'react';
import Slider from "react-slick";

import student1 from '../../images/gettyimages01.jpg';
import student2 from '../../images/gettyimages02.jpg';
import student3 from '../../images/gettyimages03.jpg';
import student4 from '../../images/gettyimages04.jpg';
import student5 from '../../images/gettyimages05.jpg';
import student6 from '../../images/gettyimages06.jpg';
import student7 from '../../images/gettyimages07.jpg';
import student8 from '../../images/gettyimages08.jpg';

import Container from 'react-bootstrap/Container';

import './style.scss'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Slickcarousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <Container fluid className='slick-container py-5'>
      <Container className='slick-carousel my-5'>
        <h3 className='py-3'>Hear From Our Elementary School Students</h3>
        <Slider {...settings}>
          <div className='carousel-card'>
            <img src={student1} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student2} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student3} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student4} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student5} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student6} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student7} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>

          <div>
            <img src={student8} alt="" />
            <div className="text-container py-2">
              <h5>John Doe</h5>
              <p>The School has helped me physically, mentally and academically</p>
            </div>
          </div>
        </Slider>
      </Container>
    </Container>
  );
};

export default Slickcarousel;