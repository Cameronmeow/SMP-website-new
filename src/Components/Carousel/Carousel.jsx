import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';

const CarouselComponent = () => {
  useEffect(() => {
    // Activate Carousel
    $('#myCarousel').carousel();
    
    // Enable Carousel Indicators
    $('.item1').click(() => {
      $('#myCarousel').carousel(0);
    });
    $('.item2').click(() => {
      $('#myCarousel').carousel(1);
    });
    $('.item3').click(() => {
      $('#myCarousel').carousel(2);
    });
    $('.item4').click(() => {
      $('#myCarousel').carousel(3);
    });
    
    // Enable Carousel Controls
    $('.left').click(() => {
      $('#myCarousel').carousel('prev');
    });
    $('.right').click(() => {
      $('#myCarousel').carousel('next');
    });
  }, []);

  return (
    <div className="container">
      <h2>Activate Carousel with JavaScript</h2>
      <div id="myCarousel" className="carousel slide">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li className="item1 active"></li>
          <li className="item2"></li>
          <li className="item3"></li>
          <li className="item4"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="pic1.jpeg" alt="Chania" width="460" height="345" />
            <div className="carousel-caption">
              <h3>Chania</h3>
              <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
            </div>
          </div>

          <div className="item">
            <img src="pic2.jpeg" alt="Chania" width="460" height="345" />
            <div className="carousel-caption">
              <h3>Chania</h3>
              <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
            </div>
          </div>
        
          <div className="item">
            <img src="pic3.jpeg" alt="Flower" width="460" height="345" />
            <div className="carousel-caption">
              <h3>Flowers</h3>
              <p>Beautiful flowers in Kolymbari, Crete.</p>
            </div>
          </div>

          <div className="item">
            <img src="img_flower2.jpg" alt="Flower" width="460" height="345" />
            <div className="carousel-caption">
              <h3>Flowers</h3>
              <p>Beautiful flowers in Kolymbari, Crete.</p>
            </div>
          </div>
        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" role="button">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselComponent;
