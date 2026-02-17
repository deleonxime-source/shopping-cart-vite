import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((cartCount)=> cartCount + 1);
  };

  
return (
    <>
      <Header cartCount={cartCount} />
      <Home addToCart={addToCart} />
    </>
  );
};

export default App;



