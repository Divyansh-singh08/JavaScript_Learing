const john = {
    name:  "John",
    greet: function(){
        console.log(  "Hello! My name is " + this.name) ;
    }
}

const CN = {
  name: "Coding Ninjas",
  printName: function(){
        console.log(this) ;
    }
};


//1.
CN.printName.bind(john)();

//2.
john.greet.call(CN);
// OR
//john.greet.apply(CN);
//john.greet.bind(CN)();

