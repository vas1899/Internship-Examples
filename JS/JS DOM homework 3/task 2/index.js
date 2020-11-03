function logOne(callBack) {setTimeout(function() {
    console.log("one!");
    callBack();
  }, Math.random() * 1000);}

function logTwo(){setTimeout(function() {
    console.log("two!");
  }, Math.random() * 1000);}
  
  function inOrder(logOne, logTwo){
    logOne(logTwo);      
  }

  inOrder(logOne, logTwo);