
// //  call back hell 
// // h1=document.querySelector("h1");
// // // setTimeout(() => {
// // //     h1.style.color="red";  
// // // }, 1000);


// // function changecolor(color,delay,){
// //     return new Promise((reslove, reject)=>{
// //     setTimeout(()=>{
// //     h1.style.color=color;
// //     reslove("color changed ");

// //     },delay);
// // });
// // }
// // changecolor("red",1000)
// // .then(()=>{
// //     console.log("red color was complted");
// //     return changecolor("orange",1000);
// // })


// // changecolor("red",1000,()=>{
// //     changecolor("blue",1000);
// // });


// // // promises  = eventual completion or failure of an asynchronus operation and its resulting value 
// // function savetoDb(data) {
// //     return new Promise((reslove, reject) => {
// //         let internetspeed = Math.floor(Math.random() * 10) + 1;
// //         if (internetspeed > 4) {
// //             reslove(" success :data was save ");
// //         } else {
// //             reject("failure: weak connection ");
// //         }
// //     });
// // }
// // // promises then and catch method 
// // //  promises chaining 

// // savetoDb("Pankaj monde  ")
// //     .then((result) => {
// //         console.log(" data1 saved :");
// //         console.log(result);
// //       return savetoDb("helloworld")

// //     })
// //     .then((result)=>{
// //         console.log("data2 saved ")
// //         console.log(result);
// //         return savetoDb("pankaj");
// //     })
// //     .then((result)=>{
// //         console.log("data3 saved ")
// //         console.log(result);
// //     })
// //     .catch((error) => {
// //         console.log("promies was rejected")
// //         console.log(error);
// //     });


// // day 26 
// // async keyword 
//  async  function greet(){
//     // throw "some random error "
//     return "hello";
//  }

//  greet()
//  .then(()=>{
//     console.log("promise was resloved");
//     console.log("result was",result)
//  })
//  .catch(()=>{
//     console.log("promised was rejected with err",err);
//    })

// await keyword 
// function getNUm(){
//    return new Promise((reslove,reject)=>{
//       setTimeout(()=>{
//  let num=Math.floor(Math.random()*10)+1;
//  console.log(num);
//  reslove();
//       },1000); 

//    });
// }
// async function demo(){
//   await getNUm();
//     getNUm();
// }

h1=document.querySelector("h1");
function changecolor(color,delay){
   return new Promise((reslove,reject)=>{  
     setTimeout(()=>{
      let num=Math.floor(Math.random()*5)+1;
      if(num>3){
         reject("promise rejected");
      }
      h1.style.color=color;
      console.log(`color changed to${color}!`);
      reslove("color changed");
     },delay)
   })
} 

async function demo(){
   //handling rejection with await 
      try{           
   await changecolor("red",1000);
    await changecolor("blue",1000);
   // changecolor("green",1000); 
   }catch(err){
      console.log("erroe caught");
      console.log(err);
    } let a=5;
   console.log(a);
   
}






