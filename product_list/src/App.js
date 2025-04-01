import './App.css';
import { categoryList } from './data';

function App() {
  console.log(categoryList);

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
    </div>
  );
}

export default App;