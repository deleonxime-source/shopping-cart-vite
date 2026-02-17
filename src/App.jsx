import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";


const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((cartCount)=> cartCount + 1);
  };

  return (
    <Router>
      <Header cartCount={cartCount} />
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart}/>}/>
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
