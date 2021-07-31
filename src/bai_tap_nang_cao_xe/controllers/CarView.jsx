import React, { Component } from "react";

export default class CarView extends Component {
  render() {
    const { dataCar } = this.props;
    const { srcImg } = dataCar;
    const imgCar = typeof srcImg;
    return (
      <div className="w-100 h-100 showCar">
        {imgCar != "undefined" ? (
          <img className="img-fluid" src={srcImg} alt="no" />
        ) : (
          <h1>
            Welcome!! Please to choose a car <br /> (Phần chọn bánh xe em không
            biết phải ghép sao nên em chưa làm phần đó :v
          </h1>
        )}
      </div>
    );
  }
}
