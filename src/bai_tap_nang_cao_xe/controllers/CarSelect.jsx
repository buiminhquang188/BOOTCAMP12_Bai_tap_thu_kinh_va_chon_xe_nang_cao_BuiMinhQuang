import React, { Component } from "react";

export default class CarSelect extends Component {
  render() {
    const { arrayFeatures, dataWheels, showCar, dataCar } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              className="list-group-item list-group-item-action active"
              id="list-color-list"
              data-toggle="list"
              href="#list-color"
              role="tab"
              aria-controls="color"
            >
              Exterior Color
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-wheels-list"
              data-toggle="list"
              href="#list-wheels"
              role="tab"
              aria-controls="wheels"
            >
              Wheels
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active border"
              id="list-color"
              role="tabpanel"
              aria-labelledby="list-color-list"
            >
              {arrayFeatures.map((item, idx) => {
                const { id, title, type, img } = item;
                return (
                  <div
                    className="card my-3 mx-3"
                    key={id}
                    onClick={() => showCar(item)}
                  >
                    <div className="row">
                      <div className="col-3 align-self-center">
                        <img
                          className="card-img-top"
                          src={img}
                          style={{ width: "50px" }}
                          alt=""
                        />
                      </div>
                      <div className="card-body col-9 text-left">
                        <p className="h5 card-title">{title}</p>
                        <p className="card-text">{type}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              class="tab-pane fade"
              id="list-wheels"
              role="tabpanel"
              aria-labelledby="list-wheels-list"
            >
              {Object.keys(dataCar).length > 0 ? (
                dataWheels.map((wheelItems, idx) => {
                  const { idWheel, img, title } = wheelItems;
                  return (
                    <div className="card my-3 mx-3" key={idWheel}>
                      <div className="row">
                        <div className="col-3 align-self-center">
                          <img
                            className="card-img-top"
                            src={img}
                            style={{ width: "50px" }}
                            alt=""
                          />
                        </div>
                        <div className="card-body col-9 text-left">
                          <p className="h5 card-title">{title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>U have to choose a Car</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
