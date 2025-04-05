function checkAgeProperty(student) {
  if ("age" in student) {
    console.log(`The student's age is ${student.age}`);
  } else {
    console.log(`The 'age' property does not exist in the student object.`);
  }
}
const student1 = { name: "Rajan", age: 23 };
const student2 = { name: "Manish" };

checkAgeProperty(student1);
checkAgeProperty(student2);
