var weekDay = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

function returnDay(x){
  return (x < 1) || (x > 7) ? null : weekDay[x];
}

console.log(returnDay(3));