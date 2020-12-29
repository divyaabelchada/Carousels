import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ArrowBack, ArrowForwardOutlined } from "@material-ui/icons";

const useStyles = makeStyles({});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ color: "#000000" }} onClick={onClick}>
      <ArrowForwardOutlined />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ color: "#000000" }} onClick={onClick}>
      <ArrowBack />
    </div>
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      /* nextArrow: <ArrowBack color="#123456" />,
      prevArrow: <ArrowForwardOutlined />, */
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Container>
          <h2> Responsive </h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}
