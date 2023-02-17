// function x(){
//     var a = 7;
//     return function y(){
//       console.log(a);
//     }
//    //y();
//     //  return y;
//   }
//   var store = x();
//   console.log(store);
//   //x();


// function z(){
//     var ans = 500;
//     function x(){
//         var a = 7;
//         function y(){
//         // return function y(){
//         console.log(a,ans);
//         }
//      y();
//      //return y;
//   }
//     // var store = x();
//     // console.log(store);
//     x();
// }
// z();


var arguments = [1, 2, 3];
var arr = () => arguments[2];
arr();
function foo(n) {
  var f = () => arguments[0] + n; 
  return f();
}
foo(3);   

