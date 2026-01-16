//  day 20 array method

// let arr=[ 1,2,3,4,5];


// arr.forEach(function(el){
//     console.log(el);
// });
// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

// let arr =[
//     {
//         name:"Pankaj",
//         marks:8.15,
//     },
//     {
//         name:"Pankaj",
//         marks:8. 15,
//     },
//     {
//         name:"Pankaj",
//         marks:8.15,
//     }
// ];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });

// Map 
// let num=[1,2,3,4,];
// let double=num.map((el)=>{
//     return el*el;
// });
// let students =[
//         {
//             name:"Pankaj",
//             marks:85,
//         },
//         {
//             name:"Pankaj",
//             marks:80.15,
//         },
//         {
//             name:"Pankaj",
//             marks:90.00,
//         }

//     ];
//     let gpa=students.map((el)=>{
//         return el.marks /10;
//     });

    // map filter
    // let nums=[1,2,3,4,5,6,7,8,9,10,11,12];
    // let ans=nums.filter((el)=>{
    // return el %2 ==0;  // even 
    // return el %2 !=0; //odd

    // });



    // every 
    // return true uf every is true 
    // reduce  reduce the arry to a single value 
//    let numbers=[1,2,3,4]; 
//    let finalval=numbers.reduce((res,el)=>{
//     console.log(res);
//      return res+el;
// });
// console.log(finalval);



//   let arrr=[1 ,4,5,2,5,7,8,3];
// let max =-1;

// for(let i=0; i<arrr.lentgh;i++){
//     if(max<arrr[i]){
//         max=arrr[i];
//     }
// }
// console.loh(max);

// finiding maximum in array 

// let max=arrr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max); 

//  check if all numbers in our array are multiples of 10 or not 

// let anss=numss.every((el) =>el%10==0);
// console.log(anss);


// crete a function to find out minimum 
// function getMin(nums){
// let min=numss.reduce((min,el)=>{
//     if(min <el){
//         return min;
//     }else{
//         return el;
//     }
// }) ;
// return min;
// }
// let numss=[10,20,30,40]; 


// default parameter
// function sum(a, b){
//     return a+b
// };
// sum(1,2);


//  spread ...
//  const data ={
//     emial:"pankajmondegmail.com",
//     password:"abcxd",
//  };
//  const datacopy={...data, id:123,country:"india"};

// rest multiple values bundle in array  
 
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us :",args[i]);
//     }
// }
// function  min(a,b,c,d){
//      console.log(arguments.length);
// }


// function summ(...arg){
//     return arg.reduce((sum,el)=> sum+el);
// }


// destructuring storing values of array into multiple varibales 

// let names=["tony","shark","caption","thor","axo","xyz"];
// let winner=names[0];
// let runneup=names[1];
// let[winner,runnerup,...others]=names;

const student={
    name:"karan",
    age:14,
    class:10,
    username:"karan123",
    password:"@1234",
};


let {username:user,password ,city="Mumbai"}=student;