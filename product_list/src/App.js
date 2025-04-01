import './App.css';
import { categoryList, priceList, expensiveProducts, totalInventoryValue } from './data';
import data from './data.json'; 

const categories = [...new Set(data.map(product => product.category))];

const CategoryButton = ({ name }) => {
  return (
    <button className="category-button">
      {name}
    </button>
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

      <h1>Product Categories and Counts</h1>
      <ul>
        {categoryList.map((item, index) => (
          <li key={index}>
            {item.name}: {item.count}
          </li>
        ))}
      </ul>

      <h1>Product Prices</h1>
      <ul>
        {priceList.map((item, index) => (
          <li key={index}>
            {item.name}: {item.price}
          </li>
        ))}
      </ul>

      <h1>Expensive Products (Costing More Than $50)</h1>
      <ul>
        {expensiveProducts.map((product, index) => (
          <li key={index}>
            {product.name}: {product.price}
          </li>
        ))}
      </ul>

      <h1>Total Inventory Value</h1>
      <p>${totalInventoryValue.toFixed(2)}</p> 
    </div>
  );
}

export default App;
