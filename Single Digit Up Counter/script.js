var countInterval;

// console.log(countInterval);
function startCounter() {

    var number = parseInt(document.getElementById("number").value);
    console.log("in this number will be  "+ number);
    if (isNaN(number)) {
        alert("Please enter a number");
        // console.log(countInterval);
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        // console.log(countInterval);
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        console.log(countInterval);
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".counter .current");
    console.log(currentNo.innerText);
    console.log("this is the currentNo "+currentNo);
    var nextNo = document.querySelector(".counter .next");
    console.log("this is the nextNo "+nextNo);
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);


    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo, end) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}



function increaseCount(currentNo, nextNo) {
    // console.log("this is the currentNo "+currentNo);
    // console.log("this is the nextNo "+nextNo);

    nextNo.classList.add("animate");
    console.log("what is the nextNo "+nextNo.innerText);
    console.log("currentNo innertext "+currentNo.innerText);

    setTimeout(function () {
        //swapping here
        currentNo.innerText = nextNo.innerText;
        console.log("here is currentNo inner "+currentNo.innerText);
        nextNo.classList.remove("animate");
        console.log("here is nextNO "+nextNo.innerText);
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
        console.log("here update is nextNO "+nextNo.innerText);
    }, 500);

}
