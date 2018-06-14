var promise1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    // resolve('yay')
    reject('oh no')
  }, 1000);
});

promise1
.then(msg => console.log('resolve: ', msg))
.catch(msg => console.log('reject: ', msg));
