import { useState } from 'react';
import './App.css';
import data from './data.json'; 

const categories = [...new Set(data.map(product => product.category))];

const CategoryButton = ({ name, onClick }) => {
  return (
    <button className="category-button" onClick={() => onClick(name)}>
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? data.filter(product => product.category === selectedCategory)
    : data;

  return (
    <div>
      <h1>Product Categories</h1>
      <div className="category-buttons">
        <button className="category-button" onClick={() => setSelectedCategory(null)}>
          Show All
        </button>
        {categories.map((category, index) => (
          <CategoryButton key={index} name={category} onClick={setSelectedCategory} />
        ))}
      </div>

      <h1>Product List</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
