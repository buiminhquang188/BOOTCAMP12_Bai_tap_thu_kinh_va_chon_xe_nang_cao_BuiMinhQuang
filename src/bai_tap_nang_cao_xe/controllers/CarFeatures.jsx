import React, { Component } from "react";

export default class CarFeatures extends Component {
  render() {
    const { dataCar } = this.props;
    const {
      color,
      price,
      engineType,
      displacement,
      horsepower,
      torque,
      redline,
    } = dataCar;
    return (
      <div className="row">
        <div className="col-12">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              className="list-group-item list-group-item-action active"
              id="list-features-list"
              data-toggle="list"
              href="#list-features"
              role="tab"
              aria-controls="features"
            >
              Exterior Color
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="list-features"
              role="tabpanel"
              aria-labelledby="list-features-list"
            >
              {Object.keys(dataCar).length > 0 ? (
                <div className="card">
                  <p className="h1 text-left">See More LX Features</p>
                  <table className="table table-bordered">
                    <tr>
                      <th>Color</th>
                      <td>{color}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>$ {price}</td>
                    </tr>
                    <tr>
                      <th>Engine Type</th>
                      <td>{engineType}</td>
                    </tr>
                    <tr>
                      <th>Displacement</th>
                      <td>{displacement}</td>
                    </tr>
                    <tr>
                      <th>Horsepower(SAE net)</th>
                      <td>{horsepower}</td>
                    </tr>
                    <tr>
                      <th>Torque(SAE net)</th>
                      <td>{torque}</td>
                    </tr>
                    <tr>
                      <th>Redline</th>
                      <td>{redline}</td>
                    </tr>
                  </table>
                </div>
              ) : (
                <h1>Let's choose a car</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
