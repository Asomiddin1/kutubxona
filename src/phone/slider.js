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
      <div className="ml-[-10px] w-[200px] h-[400px] absolute top-[146px] left-[124px]">
       
        <Slider className="sm:h-full h-[240px]" {...settings}>
          <div className="">
            <img className="h-[365px] w-[165px]" src={require('./photo_2024-05-03_17-27-54.jpg')} alt="" />
          </div>
          <div>
            <img className="h-[365px] w-[165px]" src={require('./photo_2024-05-06_11-48-04.jpg')} alt="" />
          </div>
          <div>
            <img className="h-[365px] w-[165px]" src={require('./photo_2024-05-06_11-48-05 (2).jpg')} alt="" />
          </div>
          <div>
            <img className="h-[365px] w-[165px]" src={require('./photo_2024-05-06_11-48-05.jpg')} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}