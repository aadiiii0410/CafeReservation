import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Gourmet Haven offers an exceptional dining experience in the heart of the city. Our menu features a fusion of international cuisines, meticulously curated with locally-sourced, fresh ingredients. Whether it's a romantic dinner, a lively gathering, or a corporate event, our elegant and inviting ambiance sets the stage for unforgettable culinary moments. Join us for a journey of impeccable service and extraordinary flavors.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img style={{ borderRadius: '20px' }} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-butter-chicken_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568051312157.jpeg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
