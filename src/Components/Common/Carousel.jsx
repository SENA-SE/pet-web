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
  & .petImg, img {
    height: 400px;
    background: ${({ theme }) => theme.status.bg2};
    color: white;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`
export default function SimpleSlider({ images = [""], ...rest }) {
  let settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <ArrowRightOutlinedIcon color="primary" />,
    prevArrow: <ArrowLeftOutlinedIcon color="primary" />
  };
  return (
    <Container {...rest}>


      {
        images.length === 1 &&
        <Slider {...settings}>
          <ImgContainer>
            <div className="petImg"></div>
          </ImgContainer>
          {images.map((item, index) =>
            <ImgContainer key={index}>
              <div className="petImg"><img src={item} /></div>
            </ImgContainer>
          )}
          <ImgContainer>
            <div className="petImg"></div >
          </ImgContainer>
        </Slider>
      }{
        images.length === 2 &&
        <Slider {...settings}>
          {images.map((item, index) =>
            <ImgContainer key={index}>
              <div className="petImg"><img src={item} /></div>
            </ImgContainer>
          )}
          <ImgContainer>
            <div className="petImg"></div>
          </ImgContainer>
        </Slider>
      }{
        images.length >= 3 &&
        <Slider {...settings}>
          {images.map((item, index) =>
            <ImgContainer key={index}>
              <div className="petImg"><img src={item} /></div>
            </ImgContainer>
          )}
        </Slider>
      }


    </Container>
  );
}