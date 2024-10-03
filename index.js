const products = require('./product.js'); // CommonJS import
const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

//Endpoint 1: Get the products sorted by popularity
function sortOnPopularity(product1, product2) {
  return product2.rating - product1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.sort(sortOnPopularity);
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 2: Get the products sorted by “high-to-low” price
function sortOnPriceHighToLow(product1, product2) {
  return product2.price - product1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.sort(sortOnPriceHighToLow);
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 3: Get the products sorted by “low-to-high” price
function sortOnPriceLowToHigh(product1, product2) {
  return product1.price - product2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.sort(sortOnPriceLowToHigh);
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 4: Filter the products based on the “RAM” option.
function filterByRam(product, ram) {
  return product.ram === ram;
}
app.get('/products/filter/ram', (req, res) => {
  let ram = parseInt(req.query.ram);
  let sortedProducts = products.filter((product) => filterByRam(product, ram));
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 5: Filter the products based on the “ROM” option.
function filterByRom(product, rom) {
  return product.rom === rom;
}
app.get('/products/filter/rom', (req, res) => {
  let rom = parseInt(req.query.rom);
  let sortedProducts = products.filter((product) => filterByRom(product, rom));
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 6: Filter the products based on the “Brand” option.
function filterByBrand(product, brand) {
  return product.brand.toLowerCase() === brand.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let sortedProducts = products.filter((product) =>
    filterByBrand(product, brand)
  );
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 7: Filter the products based on the “OS” option.
function filterByOs(product, os) {
  return product.os.toLowerCase() === os.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let sortedProducts = products.filter((product) => filterByOs(product, os));
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 8: Filter the products based on the “Price” option.
function filterByPrice(product, price) {
  return product.price <= price;
}
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let sortedProducts = products.filter((product) =>
    filterByPrice(product, price)
  );
  res.json({
    products: sortedProducts,
  });
});

//Endpoint 9: Send original array of products
app.get('/products', (req, res) => {
  res.json({
    products: products,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
