var name = "global";
function outer(){
  //var name = "outer";
  function inner(){
    //var name = "inner";
    console.log("this is the innerFunction: "+name);
  }
  inner();
  console.log("this is the OuterFunction: "+name);
}

outer();
console.log("this is the global function: "+name);






/*
function outer(){
  
  var Outerans = 90;
  function inner(){
    let Outerans = 34;
    var innervar = 1222;
    console.log(Outerans);
  }
  inner();
  console.log(innervar);
  console.log(Outerans);
}

outer();
//inner();*/