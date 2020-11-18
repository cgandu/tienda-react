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
                        <li
              data-target="#carouselExampleIndicators"
              data-slide-to="3"
              style={{ height: "20px", width: "20px", borderRadius: "100%" }}
            ></li>

          </ol>
          <div className="carousel-inner">
            <div
              className="carousel-item active text-center"
              style={{ height: "400px" }}
            >
              <h1
                style={{
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "12rem",
                  color: "white",
                  width: "100%"
                }}
              >
                ALGUNA PROMOCION
              </h1>

              <img
                className="d-block"
                src="/carousel1.jpg"
                alt="First slide"
                style={{ zIndex: "0" }}
              />
            </div>
            <div className="carousel-item" style={{ height: "400px" }}>
              <h1
                style={{
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "12rem",
                  color: "white",
                  width: "100%"
                }}
              >
                OTRO CONTENIDO
              </h1>
              <img
                className="d-block"
                src="/carousel2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item" style={{ height: "400px" }}>
              <h1
                style={{
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "12rem",
                  color: "white",
                  width: "100%"
                }}
              >
                CONTENIDOOOO
              </h1>
              <img className="d-block" src="/carousel3.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item" style={{ height: "400px" }}>
              <h1
                style={{
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "12rem",
                  color: "white",
                  width: "100%"
                }}
              >
                algooooooooooo

              </h1>
              <img className="d-block" src="/carousel4.jpg" alt="Fourth slide" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
