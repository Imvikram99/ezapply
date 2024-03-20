import React from "react";

export default function Hero() {
  return (
    <section
      className="hero-wrap js-fullheight"
      style={{ height: "100vh", display: "flex" }}
    >
      <div
        className="forth js-fullheight d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text">
          <span className="subheading">With Ezapply,</span>
          <h1>Find Your Dream Jobs</h1>
          <h2 className="mb-5">With Ease and Comfort</h2>
          <p>
            <a  className="remgister py-3 pr-2"  href={'/signup'}>
              Register Now
            </a>
          </p>
        </div>
      </div>
      <div
        className="third about-img js-fullheight"
        style={{ backgroundImage: 'url("bg_2.jpg")', height: "100vh" }}
      ></div>
    </section>
  );
}
