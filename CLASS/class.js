// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   showDetails() {
// //     console.log(`Name:${this.name} Age:${this.age}`);
// //   }
// // }
// // const person1 = new Person("Rajan", 23);
// // console.log(person1)
// // person1.showDetails();

// class student {
//   constructor(name, departmnent,city='Kathmandu') {
//     this.name = name;
//     this.departmnent = departmnent;
//     this.city=city
//   }
//   showDetails() {
//     console.log(`${this.name} ${this.departmnent} ${this.city}`);
//   }
// }

// const student1 = new student("Rajan", "BIT");
// const student2 = new student("Rajan", "BIT",'Pokhara');
// student1.showDetails()
// console.log(student1)
// console.log(student2)

// class A {
//   constructor(name) {
//     this.name = name;
//   }
//   eat(){
//     console.log('I eat rice')
//   }
//   eat(name){
//     console.log(`${name} eat rice`)

//   }
// }
// class B extends A {
//   constructor(name,age) {
//     super(name);
//     this.age = age;
//     this.eat()
//   }
// }
// const user = new B('Ram',23);
// console.log(user);

// user.eat('Rajan')

// class User {
//   constructor(name, age, addresss) {
//     this.name = name;
//     this.age = age;
//     this.addresss = addresss;
//   }
// }
// const user1=new User('Rajan',22,'KTM')
// console.log(user1)

// class Calculator {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   add() {
//     return this.num1 + this.num2;
//   }
//   subtract() {
//     return this.num1 - this.num2;
//   }
//   multiply() {
//     return this.num1 * this.num2;
//   }
//   divide() {
//     return this.num1 / this.num2;
//   }
//   modulus() {
//     return this.num1 % this.num2;
//   }
//   power() {
//     return this.num1 ** this.num2;
//   }
// }
// const calc = new Calculator(4, 5);
// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.divide());
// console.log(calc.modulus());
// console.log(calc.power());

class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eats ${this.food}`);
  }
}

// const elephant = new Animal("elephant", 4, 1000, "gray", "grass");
// const tiger = new Animal("tiger", 4, 500, "brown", "meat");
// const monkey = new Animal("monkey", 2, 100, "black", "fruits");
// const cat = new Animal("cat", 4, 20, "white", "meat");
// const bird = new Animal("bird", 2, 2, "blue", "cheery");
// elephant.eat();
// tiger.eat()
// monkey.eat()
// cat.eat()
// bird.eat()
// console.log(elephant)
// console.log(tiger)
// console.log(monkey)
// console.log(cat)
// console.log(bird)

// class Person extends Animal {
//   constructor(hand, age, color, name = "Rajan") {
//     super(name, age, color);
//     this.hand = hand;
//   }
// }

// class Cat extends Animal {
//   constructor(tail, name, age, color) {
//     super(name, age, color);
//     this.tail = tail;
//   }
// }
// const person1 = new Person(2, 22);
// console.log(person1);

// const cat1 = new Cat("yes", "siri", 3, "brown");
// console.log(cat1)

// Superclass: Vehicle
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model}'s engine has started.`);
  }

  stopEngine() {
    console.log(`${this.brand} ${this.model}'s engine has stopped.`);
  }

  getDetails() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}
// const myVehicle = new Vehicle("Toyota", "Corolla", 2022);
// myVehicle.startEngine();
// console.log(myVehicle.getDetails());
// myVehicle.stopEngine();

class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year);
    this.doors = doors;
  }
  getCarDetails(){
    return `${this.getDetails()} Doors:${this.doors}`;
  }
}
const myCar = new Car("Honda", "Civic", 2021, 4);
console.log(myCar.getCarDetails());
myCar.startEngine();