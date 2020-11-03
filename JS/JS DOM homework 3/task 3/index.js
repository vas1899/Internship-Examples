const logOne = new Promise((resolve, reject) => {
  resolve(console.log("one!"));
})
const logTwo = new Promise((resolve, reject) => {
  resolve(console.log("two!"));
})

//the first one has to be completed to go to logTwo
const order = function inOrder(logOne, logTwo) {
  logOne.then(logTwo);
}