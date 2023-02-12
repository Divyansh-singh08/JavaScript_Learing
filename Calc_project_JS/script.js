// let string ="";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=> {
//     button.addEventListener('click',(e)=>{

//         if(e.target.innerHTML == '='){
//             //evaluate value.
//             string = eval(string);
//             document.querySelector('input').value =  string;

//         }else if(e.target.innerHTML == 'C'){
//             //evaluate value.
//             string = "";
//             document.querySelector('input').value =  string;

//         }
//         else if(e.target.innerHTML == 'Del'){
//             //evaluate value.
//             string = string.substring(0,string.length-1);
//             document.querySelector('input').value =  string;

//         }
//         else{
//             console.log(e.target);
//             string += e.target.innerHTML;
//             document.querySelector('input').value =  string;
//         }


  
//     })
// })