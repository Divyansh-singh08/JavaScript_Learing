var student = {
	name : "John",
	age: 30,
	rollno : 12,
};

student.address = {
    City : "Gurugram",
	State: "Haryana"
}

console.log(student);
delete student.rollno;
console.log(student);