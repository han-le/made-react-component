import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MovieList";
import Promotion from "./Promotion";
import Slider from "./Slider";

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <MovieList />
        <Promotion />
        <Footer />
      </div>
    );
  }
}
