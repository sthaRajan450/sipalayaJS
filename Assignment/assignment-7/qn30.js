const user = {
  username: "rajan",
  password: "12345",
  lastLogin: null,
  update: function () {
    let currentDate = new Date();
    this.lastLogin = currentDate.toString();
  },
};
user.update();
console.log(user.lastLogin);
