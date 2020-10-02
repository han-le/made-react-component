import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h3 className="mb-5">Popular Movies</h3>
        <div className="row">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    );
  }
}
