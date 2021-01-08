import React, { Component } from "react"
import Slider from "react-slick"

import image1 from "../../images/work-slider/bitmap.jpg"
import image2 from "../../images/work-slider/bitmap@2x.jpg"

import "./style.css"
export default class WorkSlider extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      fade: false,
    };
    return (
        <Slider {...settings} className="slider-interno">
        <div>
            <img src={image1} />
        </div>
        <div>
            <img src={image2} />
        </div>
        </Slider>
    );
  }
}