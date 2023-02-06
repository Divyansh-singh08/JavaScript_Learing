//Scope and function

var namei = "scope";
console.log(namei);//global scope


function c(){
    console.log("Inside c: ");
  }
  function b(){
    c();
    console.log("Inside b: ");
  }
  function a(){
    b();
    console.log("Inside a: ");
  }
  
  a();
  console.log("this is the global context"); 
  
  var name = "global Scope";
  //console.log(name);
  function Scope(){
    var i = 12;
    console.log(i);//local scope or lexical scope
    var name = "local scope";
    console.log(name);
  }
  Scope();//1 call so print
  console.log(name);