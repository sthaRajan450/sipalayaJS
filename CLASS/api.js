// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//-----Recommended-------
// const getProducts = async () => {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   console.log(data);
// };
// getProducts();

const getUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data);
};

getUsers();
