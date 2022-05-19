import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const Container = styled.div`
  width: 100%;
  padding: 10px;

  svg {
    color: black;
    transition: .8s;
  }

  svg:hover {
    color: black;
    opacity: .5;
  }
`
const ImgContainer = styled.div`
  & .test {
    width: 230px;
    height: 200px;
    background: royalblue;
    color: white;
  }
`
export default function SimpleSlider() {
  let settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <ArrowRightOutlinedIcon color="primary"/>,
      prevArrow: <ArrowLeftOutlinedIcon color="primary"/>
  };
  return (
 <Container>
      <Slider {...settings}>
        
      <ImgContainer>
        <div class="test">1</div>
      </ImgContainer>
      <ImgContainer>
        <div class="test">2</div>
      </ImgContainer>
      <ImgContainer>
        <div class="test">3</div >
      </ImgContainer>
      <ImgContainer>
        <div class="test">4</div >
      </ImgContainer>
      {/* <ImgContainer>
        <h3>5</h3>
      </ImgContainer>
      <ImgContainer>
        <h3>6</h3>
      </ImgContainer> */}
    </Slider>
 </Container>
  );
}