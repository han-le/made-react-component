import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src="./img/minions.jpg" alt />
          <div className="card-body">
            <h4 className="card-title">Minions</h4>
            <p className="card-text">85000</p>
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    );
  }
}
