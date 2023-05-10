import Nav from "../comp/nav";

import React from "react";
import { Link } from "react-router-dom";


const Details = () => {
  return (
    <>
      <Nav />

      <section id="sec3-proDetails">
        <div id="prod-img">
          <img src="imgs/section/Rectangle6.png" alt="" />
        </div>
        <div id="prod-de">
          <h5>New!</h5>
          <h2>iPhone 9</h2>
          <h2>85$</h2>
          <h6>Brand: H &amp; M</h6>
          <p>
            Relaxed fit <br /> Crew neck <br />
            Drop shoulder sleeves <br />
            Elasticated neckline, hemline and cuffs <br />
            Made in Russia
          </p>
          <p>Stock &amp; Availability: 10</p>
          <h4>Size</h4>
          <button id="btn1">XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <footer>
            <Link>Add to Cart</Link>
            <p>Added to Cart</p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Details;
