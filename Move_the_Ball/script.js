var ballMove = document.getElementById('move-circle');
console.log(ballMove);
document.addEventListener('keydown',moveBall);

var left=0,t=0;

function moveBall(event) {
    //this will give width of the element including the scrollbar anf tools and borders
    console.log("event ",event);
    var elementW = ballMove.offsetWidth;
    console.log("elementW "+elementW);
    //this will be  give width of the browser window excluding scrollbar and tools
    var browW = document.documentElement.clientWidth;
    console.log("browW "+browW);
    var browH = document.documentElement.clientHeight;
    console.log("browH "+browH);    

    var keyCodes =  event.keyCode;
    console.log(keyCodes);

    if(keyCodes == 68 || keyCodes == 39){
        //move write d
        if(left+elementW+10 <= browW){
            ballMove.style.left = left+10+"px";
            left+=10;
        }else{
            ballMove.style.left = browW-elementW+"px";
        }
    }
    else if(keyCodes ==83 || keyCodes == 40)//to move down s
    {

        if(t+elementW+10 <= browH){
            ballMove.style.top = t+10+"px";
            t+=10; 
        }else{
            ballMove.style.top = browH-elementW+"px";
        }
    }
    else if(keyCodes == 87 || keyCodes == 38){
        //to move up W
        if(t-10 >= 0){
            ballMove.style.top = t - 10 + "px";
            t-=10;
        }
    }
    else if(keyCodes == 65 || keyCodes == 37){
        //to mve left A
         if(left-10 >= 0){
            ballMove.style.left = left-10+"px";
            left-=10;
         }
    }



}
