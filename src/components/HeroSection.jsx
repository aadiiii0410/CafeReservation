import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Most</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
            <img style={{ borderRadius: '20px' }} src="https://t3.ftcdn.net/jpg/00/27/89/60/360_F_27896051_MPH0TxG6V5robJ2rvOhSwYbZOYBazRIB.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Loved</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="fl.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img style={{ borderRadius: '20px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3w92bAfn4h_LivFqgKGwmkzHjEZhDyUIYWbYUf2cLQ&s" alt="hero" />
          </div>
          <h1 className="title dishes_title">Cuisines</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
