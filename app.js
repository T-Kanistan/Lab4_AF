const condition = true; // Change to false to test rejection

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise
  .then((result) => {
    console.log(result); // Runs if resolved
  })
  .catch((error) => {
    console.log(error); // Runs if rejected
  });