import { useState } from 'react';
import './App.css';
import data from './data.json';

const categories = [...new Set(data.map(product => product.category))];

const CategoryButton = ({ name, isActive, onClick }) => {
  return (
    <button 
      className={`category-button ${isActive ? 'active' : ''}`} 
      onClick={() => onClick(name)}
    >
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
      <p><strong>Rating:</strong> {product.rating} </p>
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

  const totalProducts = filteredProducts.length;

  const totalCategories = categories.length;

  return (
    <div>
      <h1>Product Categories</h1>
      <div className="category-buttons">
        <button className="category-button" onClick={() => setSelectedCategory(null)}>
          Show All
        </button>
        {categories.map((category, index) => (
          <CategoryButton 
            key={index} 
            name={category} 
            onClick={setSelectedCategory} 
            isActive={selectedCategory === category} 
          />
        ))}
      </div>

      <h1>Product List</h1>
      <div className="summary">
        <p>Total Products: {totalProducts}</p>
        <p>Total Categories: {totalCategories}</p>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
