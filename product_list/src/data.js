import data from './data.json';

const categories = data.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

const categoryList = Object.entries(categories).map(([category, count]) => ({
  name: category, 
  count,
}));

const priceList = data.map(product => ({
    name: product.name,
    price: product.price
}));

const expensiveProducts = data.filter(product => {
    const price = parseFloat(product.price.replace('$', '')); 
    return price > 50;
  });

const totalInventoryValue = data.reduce((total, product) => {
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, '')); 
    const units = product.units;

    if (isNaN(price) || isNaN(units) || units <= 0) {
        console.warn(`Invalid or missing data for product: ${product.name}`);
        return total;
    }

    return total + (price * units); 
}, 0);

const totalPricePerCategory = data.reduce((categoryTotals, product) => {
    const category = product.category;
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, '')); 

    // Check if the category already exists in the accumulator object
    if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
    }

    // Add the price of the current product to the total for that category
    categoryTotals[category] += price;

    return categoryTotals;
}, {});


export { categoryList, priceList, expensiveProducts, totalInventoryValue, totalPricePerCategory };