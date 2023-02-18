
//prototypes

// function Home(door,chair){
//     this.door = door;
//     this.chair = chair;
//     this.open = function(){ return this.door; };
// }

// var see1  = new Home("glass",4);


// function Person(name,Roll_no){
//     this.name = name;
//     this.Roll_no = Roll_no;
// }

// var p1 = new Person("Rohit" , 300);
// var p2 = new Person("Ravi" , 400);

// Person.prototype.getName = function (){ return this.name; };

// console.log(p1.getName()+" this is p1 what i learn " + p2.getName()+" this is for p2 ");

// function Person(name) {
//     this.name = name;
//   }
// var p1 = new Person("Joy");
// var p2 = new Person("Julie");

// Person.prototype.getName = function() { return this.name };
  
// p1.getName = function() {return "John"};

// console.log(p1.getName() + " is friend with " + p2.getName());

//  p2.getName = function() {return "Jonson"};


function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;

let obj4 = new C();
let obj3 = new Object();

A.prototype.color = "red" ;
B.prototype.color = "red" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);
 