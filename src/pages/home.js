import Nav from "../comp/nav";
import Header from "../comp/header";
import Figure from "../comp/figure";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />

      <section id="sec1">
        <h2>Products</h2>
        <div>
          <Figure />
        </div>
      </section>

      
        <Link to="/products" id="see-more">
          See More
        </Link>
      
    </>
  );
};

export default Home;
