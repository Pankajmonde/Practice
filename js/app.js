// console.log("hello world");
// console.log("Pankaj monde");
// let b=10;
// console.log(b);
// let pencil=50;
// let erasor=10;
// console.log("the totoal price is ",pencil+erasor);
// backtik ``
// let output=`totoal price is ${pencil} ruppes`;
// console.log(output);
// arithmetic operator 
// let age=18  comparison op
// console.log(age>18);
// console.log("before my age state");
// let age = 17;
// if(age>=18){
//     console.log("you can vote");
// }
//     console.log("you are not ");
// console.log("traffic light system")
// let color= "red"; 
// if(color=="red")
// {
//     console.log("dont move stop ");
// }
// if(color=="yellow"){
//     console.log("reday to go slow down ");
// }
// if(color=="green"){
//     console.log("goo now");
// }
// console.log("ok");


// let month= "april";
// if(month="january"){
//     console.log("winter is here")
// }else if(month="april"){
//     console.log("summer is here");
// }

// let size= "L";
// if(size==="XL"){
//     console.log("price is 250");
// }
// else if(size==="L")
// {
//     console.log("price is 200");
// }
// else if(size==="x"){
//     console.log("price is 100");
// }
// else{
//     console.log("price ei s 50");
// }

// logical operator 

// let marks=75;
// if(marks>=33 || marks>=80)
// {
// console.log("A+");
//     console.log('pass');
// }

// let color="green";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//         case "yellow":
//             console.log("slow down");
//             break;
//             case "green":
//                 console.log("goo");
//                 break;
//                 default:
//                     console.log("broken light");
// }

// alert("something is wroong")
// prompt("please enter your name");
// let fn=prompt("enter first name");
// let ln=prompt("enter last name");
// console.log("welcome",fn ,ln,"")
//   for(let i=1; i<=10; i++)
//   {
//   console.log(i);
//   }

// for(let i=1; i<=15; i+2)
//     {
//     console.log(i);
// }
// object literals      day 18 
// const student={
//     name:"pankaj",
//     Age: 23,
//     height: 5.50,
//     marks: 8.10,

// } ;

// thread twitter post
// const post={
//     username:"@Pankaj",
//     content: "this is my first post",
//     likes: 50,
//     repost:5,
//     tags:["delta","alpha"]
// }; 
//   get values  post.content  post["content"] 
// add update delete  
// const student={

//     name: "Pankaj",
//     city:"Mmmbai ",  
//     marks: 8.10,

// }



// array of objects 
// const classInfo=[
//     { 
//     name:"Pankaj",
//     grade:"A",
//     },
//     {
//         name:"shrada",
//         grade:"A",
//     },
// ];

// guessing game 
const max=prompt("enter th emax number ");

const random =Math.floor(Math.random() * max) +1;

let guess=prompt("guess the nmber");
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("you are right congratulaton",random)
        break;
    }else if(guess < random){
        guess=prompt("YOur guess is to small.please try again");
    
    }else{
        guess=prompt('YOur guess is to large .please try again');

    }
    
     
}