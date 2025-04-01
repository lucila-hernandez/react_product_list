import './App.css';
import { categories } from './data';

function App() {
  console.log(categories);

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {Object.entries(categories).map(([category, count], index) => (
          <li key={index}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;