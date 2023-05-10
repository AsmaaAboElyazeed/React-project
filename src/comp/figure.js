import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';

const Figure = () => {
  
  return (
    <div>
      <figure>
        <button>
          {/* <img src="imgs/section/wish.svg" alt="wish" /> */}
          <AiOutlineHeart size={25}/>
        </button>
        <Link to="/details">
          
          <img src="imgs/section/Rectangle6.png" alt="" id="fig-img" />
          <aside>
            <h4>iPhone 9</h4>
            <h4>85$</h4>
          </aside>
          <p>
            An apple mobile which is nothing like apple, An apple mobile which
            is nothing like apple
          </p>
        </Link>
      </figure>
    </div>
  );
};

export default Figure;
