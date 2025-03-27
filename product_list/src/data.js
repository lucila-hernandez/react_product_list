import data from './data.json';

const categories = [...new Set(data.map(product => product.category))];

export { categories };
