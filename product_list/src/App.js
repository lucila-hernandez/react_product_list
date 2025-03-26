import './App.css';
import { categories } from './data';

function App() {
  console.log(categories);

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;