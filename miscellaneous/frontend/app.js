// // oop 

// const { prototype } = require("events")

// // const stu1={
// //     name: "John Doe",
// //     age: 20,
// //     subjects: ["Math", "Science", "History"],
// // }

// // object prototype 

// // Parent object
// const animal = {
//     eat: function() {
//       console.log("This animal eats food.");
//     }
//   };
  
//   // Child object inheriting from 'animal'
//   const dog = Object.create(animal);
//   dog.bark = function() {
//     console.log("Woof! Woof!");
//   };
  
//   // Accessing properties and methods
//   dog.bark(); // Outputs: Woof! Woof!
//   dog.eat();  // Outputs: This animal eats food.

  // new operator   constrcutor // Constructor function for creating Student objects
  // function Student(name,age,subjects){
  //   this.name = name; 
  //   this.age = age; 
   
  
  // }

  // Student.prototype.talk=function(){
  //   console.log(`my name is ${this.name} and I am ${this.age} years old. I study ${this.subjects.join(", ")}.`);
  // }

  // let  p1= new Student("John Doe", 20 );
  // let  p2= new Student("John Doe", 20 );

  // classes 

  // Classes are template for creating objects. They encapsulate data and behavior in a single entity, making it easier to create and manage objects with similar properties and methods.
  // constructor dosent return anything and start with captital 
  // class Student{
  //   constructor(name, age, ) {
  //     this.name = name;
  //     this.age = age;
      
  //   }
  //   talk(){
  //     console.log(`my name is ${this.name}`)
  //   }
  // }
  //   // object create using new oprator 
  // let  p1= new Student("John Doe", 20 );
  // let  p2= new Student("don ", 22 );

  // INheritance is a mechanism that allows one class to inherit properties and methods from another class, promoting code reuse and establishing a parent-child relationship between classes.
   
  class Person{
    constructor(name, age) {
      console.log("Person constructor called"); // Debugging line
      this.name = name;
      this.age = age;
    }
  
  talk(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}
  
  
  class Student extends Person {
    constructor (name,age,marks){
      console.log("Student constructor called"); // Debugging line
      super(name,age); // Call the constructor of the parent class (Person)
      this.marks = marks;
    }
  
   }
   
     


   class Teacher extends Person {
    constructor(name, age, subject) {
      console.log("Teacher constructor called"); // Debugging line
       super(name, age); // Call the constructor of the parent class (Person)
      this.subject = subject;
    }
    
   }
