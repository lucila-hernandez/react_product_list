//import { categoryList, priceList, expensiveProducts, totalInventoryValue } from './data';
import './App.css';
import data from './data.json'; 

const categories = [...new Set(data.map(product => product.category))];

const CategoryButton = ({ name }) => {
  return (
    <button className="category-button">
      {name}
    </button>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Units in Stock:</strong> {product.units}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Product Categories</h1>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <CategoryButton key={index} name={category} />
        ))}
      </div>

      <h1>Product List</h1>
      <div className="product-list">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
