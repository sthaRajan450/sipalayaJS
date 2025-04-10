const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

const printNumbers = (numbers) => {
  let i = 1;
  for (let i = 0; i < numbers; i++) {
    console.log(i);
  }
};
module.exports = { sayHello, printNumbers };
