let myPromise = new Promise((res, rej) => {
  let x = 1;

  if (x == 0) {
    res("Ok");
  } else {
    rej("Error");
  }
});
myPromise.then((data) => {
  console.log(data);
}).catch(error=>console.log(error))
