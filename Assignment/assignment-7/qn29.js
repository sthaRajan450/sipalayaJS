const user = {
  username: "rajan",
  password: "12345",
//   email:"r@tech.com"
};
function updateOrAddProperty(user) {
  if ("email" in user) {
    user.email = "rajan@google.com";
  } else {
    user.email = "manish@google.com";
  }
}
updateOrAddProperty(user);
console.log(user);
