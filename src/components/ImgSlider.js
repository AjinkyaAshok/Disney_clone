/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/slider-badging.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-badag.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-badging.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-badag.jpg" alt=""></img>
        </Wrap>
      </Carousel>
    </div>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin: 20px 20px 20px 30px;
  width: 95%;

  .slick-list {
    overflow: visible;
  }

  ul li button {
    &before {
      font-size: 10px;
      color: white;
    }
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    cursor: pointer;
    border: 4px solid transparent;
    border-radius: 4px ;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px, 0/ 73% 0px 16px 10px -10px;
    transition-duration: 300ms;
  }

  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
