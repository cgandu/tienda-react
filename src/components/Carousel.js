import { ViewCarousel } from "@material-ui/icons";
import React from "react";

function Carousel() {
  return (
    <>
      <div style={{ height: "400px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
              style={{ height: "20px", width: "20px", borderRadius: "100%" }}
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              style={{ height: "20px", width: "20px", borderRadius: "100%" }}
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              style={{ height: "20px", width: "20px", borderRadius: "100%" }}
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="/fondo-botellas-chico.jpg"
                alt="First slide" objectFit="cover"
              />
            </div>
            <div className="carousel-item" style={{ height: "400px" }}>
              <img
                className="d-block w-100"
                src="/cava-sanlucar.jpg"
                alt="Second slide" objectFit="cover"
              />
            </div>
            <div className="carousel-item" style={{ height: "400px" }}>
              <img className="d-block w-100" src="/corchos.jpg" alt="Third slide" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
