import { useParams} from "react-router-dom";

const products = [
  { id: 1, name:"Product 1", price: 10, description:"This is an awesome product." },
  { id: 2, name: "Product 2", price: 20, description:"A premium quality product." },
  { id: 3, name: "Product 3", price: 30, description:"An excellent product."},
];


const ProductDetail = ({addToCart}) => {
    const{id}=useParams();
    const product = products.find((p)=> p.id === parseInt(id,10));
  
if(!product){
    return <h2 className="error-message">Product not found</h2>;
}

return(
<div className="product-detail-container">
<div className="product-detail">
<h2>{product.name}</h2>
<p className="product-price">Price: ${product.price}</p>
<p className="product-description">{product.description}</p>
<button onClick={addToCart}>Add to Cart</button>
</div>
</div>

);
};

export default ProductDetail;
