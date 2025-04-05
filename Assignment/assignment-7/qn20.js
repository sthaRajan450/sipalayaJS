const person = {
  firstName: "Rajan",
  lastName: "Shrestha",
  age: 23,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());
