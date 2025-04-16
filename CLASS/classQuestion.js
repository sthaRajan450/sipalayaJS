// var cat = {
//   name: "Fluffyy",
//   activities: ["play", "eat cat food"],
//   catFriends: [
//     {
//       name: "bar",
//       activities: ["be grumpy", "eat bread omblet"],
//       weight: 8,
//       furcolor: "white",
//     },
//     {
//       name: "foo",
//       activities: ["sleep", "pre-sleep naps"],
//       weight: 3,
//     },
//   ],
// };

// cat.catFriends.forEach((friend) => {
//   friend.activities.forEach((activities) => console.log(activities));
// });

// const totalWeight = cat.catFriends.reduce(
//   (acc, friend) => acc + friend.weight,
//   0
// );
// console.log(totalWeight);

// const user = {
//   name: "Ram",
//   age: 25,
//   num: [1, 2, 3, 4, 5, 6],
//   phone: {
//     phone1: [9867546450, 9847443987],
//     phone2: [9847438490, 9847100045],
//   },
// };

// const sum = user.num.reduce((acc, number) => acc + number, 0);
// console.log(`sum : ${sum}`);

// for (const key in user.phone) {
//   user.phone[key].forEach((phone) => {
//     console.log(phone);
//   });
// }

const productList = [
  { title: "abc", price: 12, tag: ["a", "b"] },
  { title: "xyz", price: 120, tag: ["c", "b"] },
  { title: "mno", price: 52, tag: ["e", "f"] },
  { title: "aaa", price: 200, tag: ["g", "h"] },
];

productList.forEach(product=>
    product.tag.forEach(item=>
        console.log(item)
    )
)