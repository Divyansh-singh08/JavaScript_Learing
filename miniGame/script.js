var index = 0;
var isTriangle = false;
var color = ["#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","purple"];
var chShape = document.getElementById("change-shape");
var chColor = document.getElementById("change-color");


chShape.addEventListener("click",changeShape);
chColor.addEventListener("click",changeColor);

function changeColor()
{
    document.getElementById("circle").style.backgroundColor=color[index++];
    if(index == 7)
      index = 0;


}
function changeShape()
{
  if(!isTriangle)
  {
    var i = document.getElementsByClassName("inner");
    i[0].className = "triangle-bottomleft";
    isTriangle = true;
  }
  else
  {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner";
    isTriangle = false;
  }

    // var c = document.getElementById("inner");//document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // ctx.beginPath();
    // ctx.moveTo(20, 20);
    // ctx.lineTo(20, 100);
    // ctx.lineTo(70, 100);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fillStyle = "red";
    // ctx.fill();
}















// const shapes = ["circle", "square", "triangle"];
// const colors = ['red', 'green', 'blue'];
// const apps = document.querySelector('#app');
// const changec = document.querySelector('#btn1');
// function changeColor() {
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   apps.style.backgroundColor = color;
// }
// function changeShape(){
//     apps.style.border="10px 20px 0px 0px";
// }

// changec.addEventListener('click', changeColor);
// // document.querySelector('#app').addEventListener('click', changeShape);

// const shape = document.querySelector('#inner-shape');
// const changeShapeBtn = document.querySelector('#btn2');

// function changeShape() {
  
//     const randomIndex = Math.floor(Math.random() * shapes.length);
//     const randomShape = shapes[randomIndex];
  
//     shape.className = "shape" + randomShape;
//   }

// changeShapeBtn.addEventListener('click',changeShape);
