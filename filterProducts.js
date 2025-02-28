const fs = require('fs/promises');

const filePath = './products.json';

async function filterExpensiveProducts() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const products = JSON.parse(data);
        const expensiveProducts = products.filter(product => product.price > 1000);
        console.log(expensiveProducts);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

filterExpensiveProducts();
