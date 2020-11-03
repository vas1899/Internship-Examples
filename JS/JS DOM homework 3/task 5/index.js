  let promise1 = new Promise((resolve, reject) => {
    reject(new Error('Error - rejected'));
 });
  let promise2 = new Promise((resolve, reject) => { 
    setTimeout(() => resolve('promise1'), 0);  
 });
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise3'), 0);
 });
  
//here should catch it since in promise1 throws an error
  Promise.all([promise1, promise2, promise3])
  .then(values => { 
    console.log(values);
  })
  .catch(error => { 
    console.error(error.message)
  });

  //here should return an array with promise2 and promise3
  Promise.all([promise2, promise3])
  .then(values => { 
    console.log(values);
  })
  .catch(error => { 
    console.error(error.message)
  });