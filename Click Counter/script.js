var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;

box.addEventListener('click', function(){
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});