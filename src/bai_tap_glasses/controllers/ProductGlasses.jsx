import React, { Component } from "react";

export default class ProductGlasses extends Component {
  render() {
    const { glasses, tryGlasses } = this.props;
    return (
      <div className="col-2 glasses__product">
        <div className="card border-dark">
          <img
            className="card-img-top img-fluid"
            src={glasses.url}
            alt={"glasses" + glasses.id}
            // Truyền vào 3 tham số tên kính, mô tả và url kính
            onClick={() => tryGlasses(glasses.name, glasses.desc, glasses.url)}
          />
        </div>
      </div>
    );
  }
}
