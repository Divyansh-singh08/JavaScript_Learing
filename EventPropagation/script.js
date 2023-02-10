var innerdiv = document.getElementById('inner');
innerdiv.addEventListener('click', function(event){
    console.log("inner div click");
    event.stopPropagation();
})


var outerdiv = document.getElementById('outer');
outerdiv.addEventListener('click', function(event){
    console.log("outer div click");
    event.stopPropagation();
})

document.addEventListener('click',function(event){
    console.log("document click");
    event.stopPropagation();
})