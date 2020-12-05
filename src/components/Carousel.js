import React from "react";

function Carousel({ carouselItems }) {
  function Indicators() {
    return (
      <>
        <ol className="carousel-indicators">
          {carouselItems.map((e, idx) => (
            <li
              key={idx}
              data-target="#carouselLanding"
              data-slide-to={idx}
              className="active"
              style={{ height: "20px", width: "20px", borderRadius: "100%" }}
            ></li>
          ))}
        </ol>
      </>
    );
  }

  function Slides() {
    return (
      <>
        <div className="carousel-inner">
          {carouselItems.map((item, idx) => (
            <div
              key={idx}
              className={
                (idx === 0 && `carousel-item active text-center`) ||
                (idx !== 0 && `carousel-item`)
              }
              style={{ height: "400px" }}
            >
              <h1
                style={{
                  position: "absolute",
                  zIndex: "1",
                  marginTop: "12rem",
                  color: "white",
                  width: "100%",
                }}
              >
                {item.texto}
              </h1>

              <img
                className="d-block"
                src={item.foto}
                alt="Slide"
                style={{ zIndex: "0" }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <div
          id="carouselLanding"
          className="carousel slide"
          data-ride="carousel"
        >
          <Indicators />
          <Slides />
        </div>
      </div>
    </>
  );
}

export default Carousel;
