// function timer() {
//     for(let i = 1; i<=5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Hello ninjas!");
// }
// timer();





function timer() {
    for(let i = 1; i<=5; i++){
        setTimeout(function add(a,b,c,d) {
            console.log(a+b+c+d)
          }, i*10);
    }
    console.log("Hello ninjas!");
}
timer();