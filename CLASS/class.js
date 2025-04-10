// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showDetails() {
//     console.log(`Name:${this.name} Age:${this.age}`);
//   }
// }
// const person1 = new Person("Rajan", 23);
// console.log(person1)
// person1.showDetails();

class student {
  constructor(name, departmnent) {
    this.name = name;
    this.departmnent = departmnent;
  }
  showDetails() {
    console.log(`${this.name} ${this.departmnent}`);
  }
}

const student1 = new student("Rajan", "BIT");
student1.showDetails()
console.log(student1)