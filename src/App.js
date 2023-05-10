
import  {BrowserRouter, Routes, Router, Route}  from "react-router-dom";
 
import Home  from "../comp/home";
import Details  from "../comp/details";
import Login  from "../comp/login";
import Products  from "../comp/products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Products />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
