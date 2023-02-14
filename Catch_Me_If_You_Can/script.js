"use strict"

var rectBox = document.getElementById("square");
console.log("rectBox "+rectBox.innerHTML);
//offsetLeft return distance of element related to left edge of it parent.
var rectLeft = rectBox.offsetLeft;
console.log("rectLeft "+rectLeft);
var rectTop = rectBox.offsetTop;
console.log("rectTop "+rectTop);
//clientWidth this will be the only include the width of the element with include padding but exclude the scrollbar margin
var rectWidth = rectBox.clientWidth;
console.log("rectWidth "+rectWidth);
var rectHeight = rectBox.clientHeight;
console.log("rectHeight "+rectHeight);

//this will only include browser width exclude scrollbar,border,tools
var browserW = document.documentElement.clientWidth;

console.log("browserW "+browserW);
var browserH = document.documentElement.clientHeight;
console.log("browserH "+browserH);


// when we hit the to the box action will be taken here   
rectBox.addEventListener('mouseover',moveRectBox);

var newLeft,newTop;

function moveRectBox(event){
    console.log("event occurs");

    newLeft = Math.floor(Math.random()*browserW);
    console.log(newLeft+" newLeft value ");
    newTop = Math.floor(Math.random()*browserH);
    console.log(newTop+" newTop value ");

    while(newLeft == rectLeft && newTop == rectTop)
    {
        if(newTop == rectTop){
            newTop = Math.floor(Math.random()*browserH);
        }else{
            newLeft = Math.floor(Math.random()*browserW);
        }
    }

    var correctL = false ,correctT = false;
    while(!correctL || !correctT){
        //it won't go out of the browser viewPort

        if(newLeft + rectWidth <= browserW ){
            correctL = true;
        }else{
            newLeft = Math.floor(Math.random()*browserW);
        }

        if(newTop + rectHeight <= browserH){
            correctT = true;
        }else{
            newTop = Math.floor(Math.random()*browserH);
        }


    }

    toDo(rectBox.offsetTop,rectBox.offsetLeft,newTop,newLeft);


    console.log("this is newTop newLeft "+newTop,newLeft);


}


var id;
function toDo(intialTop,intialLeft,finalTop,finalLeft){
	// intialTop =  rect.offsetTop;
	// intialLeft = rect.offsetLeft;

	console.log("function1 Called");
    id = setInterval(function() { sendToDosti(finalTop,finalLeft,id);},1);
}




function sendToDosti(finalTop,finalLeft,id)
{
	var intialTop=rectBox.offsetTop;
	var intialLeft=rectBox.offsetLeft;

	console.log("fuction2 called");
    if(intialTop == finalTop && intialLeft == finalLeft)
	{
				clearInterval(id);
				return;
	}

	if(intialLeft<finalLeft)
		{
			if(intialLeft+20<=finalLeft)
				intialLeft+=20;
			else
				intialLeft = finalLeft;

		}
	else{
		if(intialLeft-20>=finalLeft)
			intialLeft-=20;
		else
			intialLeft = finalLeft;
	}


	if(intialTop<finalTop)
		{
			if(intialTop+20<=finalTop)
				intialTop+=20;
			else
				intialTop = finalTop;
		}
	else
	{
		if(intialTop-20>=finalTop)
			intialTop-=20;
		else
			intialTop = finalTop;
	}
	rectBox.style.left = intialLeft + "px";
	rectBox.style.top = intialTop + "px";
	console.log(intialTop,intialLeft);
	console.log(rectBox.offsetTop);
	console.log(rectBox.offsetLeft);


}