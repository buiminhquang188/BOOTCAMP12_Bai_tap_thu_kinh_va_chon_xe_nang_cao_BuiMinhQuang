import React, { Component } from "react";
import ProductGlasses from "./ProductGlasses";

export default class ModelGlasses extends Component {
  state = {
    name: "",
    desc: "",
    url: "",
    showGlass: "none",
  };

  tryGlasses = (name, desc, url) => {
    const showGlass = "block";
    this.setState({
      name,
      desc,
      url,
      showGlass,
    });
  };
  render() {
    const { dataGlasses } = this.props;
    const { name, desc, url, showGlass } = this.state;
    return (
      <div className="container vh-100">
        <div className="row align-items-center">
          <div className="col-12 ">
            <div className="glasses__model">
              {" "}
              <img
                className="w-25 h-25"
                src="./glassesImage/model.jpg"
                alt="model"
              />
              <img
                className="w-25 h-25 tryGlasses"
                src={`${url}`}
                style={{ display: showGlass }}
                alt=""
              />
              <div
                className="glasses__info text-left w-25 px-2"
                style={{ display: showGlass }}
              >
                <h3 className="text-primary">{name}</h3>
                <p className="text-light">{desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row bg-light border border-dark py-5 px-5">
            {dataGlasses.map((glasses, idx) => {
              return (
                <ProductGlasses
                  key={glasses.id}
                  glasses={glasses}
                  tryGlasses={this.tryGlasses}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
