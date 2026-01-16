// function hello() {
//     console.log("Hello");
// }
// function printName() {
//     console.log.og("Pankaj");
// }
// function print1to5() {
//     for(let i= 1; i <= 5; i++)  { 
//         console.log(i);
//     }
// }

// function isadult(){
//     let age=18
//     if(age>=18){
//         console.log("adult");
//     }
//         else{
//             console.log("not adult");
//         }
// }
// isadult(); 
// print1to5();


// function rolldice(){
// let rand=Math.floor(Math.random()*6)+1;
// console.log(rand); 
// }
// rolldice();
// function with arguments 
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2)

// create a function that gives the avrarage of 3 numbers 

// function calavg(a , b ,c ){
//     console.log(a+b+c)/3;
// }
// calavg(2,2,2);

// crerate a function that prints the mutiplication of table
// function printTable(n) {
//     for (let i = n; i <= n * 10; i += n) {
//         console.log(i);
//     }
// }
// printTable(10)

// return keyword  day 19 

// create a function that return the sum of from 1 to n 
// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;

// }

// create a function that return the concatination of all string in an array 
// let str=["hii", "hello", "by"];
// function concat(str){
//     let result ="";
//     for(let i=0;i<str.lentgh;i++){
//         result+=str[i];
//     }
//     return result;
// }

// scope  
// not possbile to use outside function 
// global scope   let sum =54; 
// function calsum(a,b){
//     let sum=a+b;  //function scope 
//     console.log(sum);
// }
// calsum(1,2);
// function expresiion 
// let name="pankaj";
// let sum=function(a,b){
//     return(a+b);
// }
// higher order funtion 
// function multiplegreet(func,c){
//     for(let i=1;i<=c;i++){
//         func();
//     }
// }
//     let greet=function(){
//         console.log("hello");
//     }
    
// multiplegreet(function(){console.log("nmaste")},1000);

// odd even function higher 
// let odd= function(n){
//     console.log(!(n%2==0));
// }
// let even=function(n){
//     console.log(n%2==0);
// }
// function oddevenfactory(){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request=="even"){
//         let even=function(n){
//             console,log(n%2==0);
//         }
//         return even;
//     }else{

//         console.log("wrong request")
//     }
// }
// let request="odd";

// this keyword  day 20 

// const student={
//     name:"pankaj",
//     age:21,
//     eng:90,
//     maths: 45,
//     getAvg(){
//         console.log(this);
//         let avg=(this.eng+ this.maths)/2;
//         console.log(`${this.name}"got avg marks"=${avg}`);
//     }

// }
//  function getAvg(){
//     console.log(this);
//  }

// try and catch 
// console.log("hello");
// console.log("hello");
// try{ 
//     console.log(a);
// }catch{
//     console.log("caught an errer varibale dosent defined ");
// }
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// arrow function 

// const sum =(a,b) =>{
//     console.log(a+b);
// };
// const Cub=(n)=>{
//     return n * n * n;
// };

// set setTimeout
// console.log("Hii there");
// // setTimeout(()=>{
// //     console.log("apna college");
// // },4000);
// setInterval (()=>{
//     console.log("apna college");
// },4000);
// console.log ("Welcome to");  


// write an arrow function that returns the square of a number n 
const square =(n)=> n*n;
console.log(square(4));

//  write a function that prit hello world 5 times each in 2 second 
 let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
 clearInterval(id);
 console.log("clear ")
},10000);
