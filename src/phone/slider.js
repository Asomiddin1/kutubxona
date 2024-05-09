import React, { Component } from "react";
import Slider from "react-slick";



export default class LazyLoad extends Component {
  render() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
      <div className="ml-[-10px] w-[200px] h-[400px] absolute top-[136px] left-[114px]">
       
        <Slider className="sm:h-full h-[240px]" {...settings}>
          <div className="">
            <img className="h-[410px] w-[285px]" src={require('./images/screenshot.png')} alt="" />
          </div>
          <div className="">
            <img className="h-[410px] w-[285px]" src={require('./images/screenshot.png')} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}