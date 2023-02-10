

var isToggle = false;


function toggle(){

    console.log("Clicked");
    if(isToggle){
        toggleWhite();
        isToggle = false;
    }else{
        toggleBlack();
        isToggle = true;
    }
}

function toggleBlack(){

    var element = document.getElementsByClassName("circle")[0];
    element.classList.add('toggleCircle');

    document.getElementsByClassName("oval")[0].classList.add("toggleOval");

    document.getElementsByTagName("body")[0].classList.add("toggleBack");
}


function toggleWhite(){

    document.getElementsByClassName('circle')[0].classList.remove("toggleCircle");

    document.getElementsByClassName('oval')[0].classList.remove("toggleOval");

    document.getElementsByTagName('body')[0].classList.remove("toggleBack");
}











