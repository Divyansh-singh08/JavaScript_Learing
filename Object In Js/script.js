
// var student1 = {
//     name:"Divyansh",
//     rollNo:56,
//     marks:90,
// };

// console.log(student1);

//if u need to create 100 time and here template is also same 
//so create function do our work

// function createStudent(name,rollNo,marks){
//     var st = {};
//     st.name = name;
//     st.marks = marks;
//     st.rollNo = rollNo;
//     return st;
// }


// var stu1 = createStudent("ravi", 45, 89);
// var stu2 = createStudent("rohan", 67, 78);
// var stu3 = createStudent(); 


//Constructor call as a Method by using the object

function pen(name,roll,marks){
    this.name = name;
    this.roll = roll;
    this.marks = marks;
}

var st1 = new pen("Ravi" , 34 , 56);