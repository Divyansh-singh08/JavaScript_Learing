
var box12 = document.getElementById('box1')

function hover(){
    console.log("Srejal fail");
}
function hover2(){
    console.log("Srejal fail first");
}

box12.addEventListener('mouseover',hover);
box1.addEventListener('mouseout',hover2);

var inp = document.getElementById('search');

inp.addEventListener('keypress',function(){
    console.log("key is typing....");
});