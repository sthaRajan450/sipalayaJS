const products = [
  { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 45000, category: "Electronics" },
  { id: 3, name: "Headphones", price: 3000, category: "Accessories" },
  { id: 4, name: "Chair", price: 5000, category: "Furniture" },
  { id: 5, name: "Notebook", price: 100, category: "Stationery" },
];

function getproducts(price) {
  return products.filter((product) => product.price > price);
}
const productsGT3000 = getproducts(50000);
console.log(productsGT3000);
