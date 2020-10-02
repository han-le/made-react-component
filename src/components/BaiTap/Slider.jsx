import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={2} className="active" />
          <li data-target="#demo" data-slide-to={3} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/slide_1.png" alt="Los Angeles" width="100%" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide_2.png" alt="Chicago" width="100%" />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}
