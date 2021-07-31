import React, { Component } from "react";
import "../assets/css/StylingGlasses.css";
import ModelGlasses from "./ModelGlasses";
import dataGlasses from "../services/dataGlasses.json";
export default class GlassesContain extends Component {
  render() {
    return (
      <div className="container-fluid mx-0 px-0 glasses h-100 w-100">
        <div>
          <p className="h3 text-center text-uppercase text-light py-5 w-100">
            try glasses app online
          </p>
        </div>
        <div className="py-5">
          <ModelGlasses dataGlasses={dataGlasses} />
        </div>
      </div>
    );
  }
}
