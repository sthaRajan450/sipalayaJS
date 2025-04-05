const company = {
  name: "sipalaya info tech",
  location: "Kathmandu, Nepal",
  departments: {
    HR: {
      employees: 10,
      manager: "Aarav Sharma",
    },
    Engineering: {
      employees: 30,
      manager: "Sujan Tamang",
    },
    Sales: {
      employees: 15,
      manager: "Priya Karki",
    },
  },
};

function valuesOfDepartment(department) {
  if (company.departments[department]) {
    return company.departments[department];
  } else {
    return `Department ${department} not found`;
  }
}
console.log(valuesOfDepartment("Engineering"));
