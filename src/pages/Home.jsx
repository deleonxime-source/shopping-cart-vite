import "../styles/Home.css";
import ProductCard from "../components/ProductCard";

const products = [
  { name:"Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];

const Home = ({ addToCart }) => {
  return (
    <div className="home">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;

