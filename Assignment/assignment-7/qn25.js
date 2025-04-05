const settings = {
  theme: true,
  notifications: true,
  privacy: true,
  toggle: function () {
    // if (this.notifications) {
    //   this.notifications = false;
    // } else {
    //   this.notifications = true;
    // }

    this.notifications = !this.notifications;
  },
};
console.log(settings.notifications);
settings.toggle();
console.log(settings.notifications);
