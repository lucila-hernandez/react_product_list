import data from './data.json';

const categories = data.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

const categoryList = Object.entries(categories).map(([category, count]) => ({
  name: category, // Change 'category' to 'name'
  count,
}));

export { categoryList };