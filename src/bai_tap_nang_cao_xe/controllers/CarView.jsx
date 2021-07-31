import React, { Component } from "react";

export default class CarView extends Component {
  render() {
    const { dataCar } = this.props;
    const { srcImg } = dataCar;
    return (
      <div className="w-100 h-100 showCar">
        <img className="img-fluid" src={srcImg} alt="no" />
        <img className="img-fluid wheelCar" src={"./images/icons/icon-wheel-1.jpg"}/>
      </div>
    );
  }
}
