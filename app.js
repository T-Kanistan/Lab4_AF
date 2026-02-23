const condition = true; // Change to false to test rejection

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

async function myFunction() {
  try {
    const result = await myPromise; // Wait for the promise to resolve
    console.log(result);
  } catch (error) {
    console.log(error); // Catch if promise rejects
  }
}

myFunction();