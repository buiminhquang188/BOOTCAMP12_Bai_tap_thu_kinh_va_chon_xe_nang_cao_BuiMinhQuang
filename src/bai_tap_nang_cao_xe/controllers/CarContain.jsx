import React, { Component } from "react";
import CarSelect from "./CarSelect";
import CarFeatures from "./CarFeatures";
import CarView from "./CarView";
import arrayFeatures from "../services/arrayFeatures.json";
import dataWheels from "../services/wheels.json";
import style from "../assets/css/style.css";

export default class CarContain extends Component {
  state = {
    dataCar: [],
  };
  showCar = (item) => {
    // cập nhật state vào mảng
    this.setState({
      dataCar: item,
    });
  };

  showFeatures = () => {};
  render() {
    const { dataCar } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <CarView dataCar={dataCar} />
          </div>
          <div className="col-5">
            <CarSelect
              arrayFeatures={arrayFeatures}
              dataWheels={dataWheels}
              showCar={this.showCar}
              dataCar={dataCar}
            />
          </div>
          <div className="col-7">
            <CarFeatures dataCar={dataCar} />
          </div>
        </div>
      </div>
    );
  }
}
