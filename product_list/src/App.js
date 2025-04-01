import './App.css';
import { categoryList, priceList, expensiveProducts, totalInventoryValue } from './data';

function App() {
  return (
    <div>
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
