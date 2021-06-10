import React from 'react';

function Slider(props) {
  return (
    <div id="carouselExampleInterval slide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <img src="images/SliderImages/1.jpg" className="d-block w-100" alt="img..." width="auto" height="450px"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img src="images/SliderImages/2.jpg" className="d-block w-100" alt="img..." width="auto" height="450px"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <img src="images/SliderImages/3.jpg" className="d-block w-100" alt="img..." width="auto" height="450px"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
  );
}

export default Slider;
