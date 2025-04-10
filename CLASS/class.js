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

class A {
  constructor(name) {
    this.name = name;
  }
  eat(){
    console.log('I eat rice')
  }
  eat(name){
    console.log(`${name} eat rice`)

  }
}
class B extends A {
  constructor(name,age) {
    super(name);
    this.age = age;
    this.eat()
  }
}
const user = new B('Ram',23);
console.log(user);


user.eat('Rajan')