import './App.css';
import { categoryList, priceList } from './data';

function App() {
  console.log(categoryList);
  console.log(priceList);

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
    </div>
  );
}

export default App;