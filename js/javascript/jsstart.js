
// // // //  DOM manipulation 
// // // // // selecting elements by using document getElementById  



// // // // // getElementByclassname return the elements as an html collection or empty collection (if not found  )

// // // // // let smallImages=document.getElementsByClassName("oldImg");
// // // // // for(let i=0;i<smallImages.length;i++){
// // // // //     smallImages[i].src="asset/spidernan.jpg";
// // // // //     console.log(`value of image no.$(i)is changed`);
// // // // // } 

// // // // // getElementbyTagName  
// // // // // query selectors  allow us to select any css selector 
// // // // console.dir(document.querySelector("h1"));
// // // // console.dir(document.querySelector("#description"));
// // // // console.dir(document.querySelector(".oldImg"));
// // // // console.dir(document.querySelector("div a"));
// // // // // if all need to collect 
// // // // console.dir(document.querySelectorAll("p"));
// // // // //   attribute manipulating  style
// // // // let links=document.querySelectorAll(".box a");
// // // //  for(let i=0; i<links.length; i++){
// // // //     links[i].style.color ="yellow";
// // // //  }
// // // // adding Element on page 
// // // let btn=document.createElement('button');
// // // undefined
// // // btn.innerHTML="NEw button";
// // // 'NEw button'
// // // letp=docment
// // // VM1694:1 Uncaught ReferenceError: docment is not defined
// // //     at <anonymous>:1:1
// // // (anonymous) @ VM1694:1Understand this errorAI
// // // let p=document.querySelector('p');
// // // undefined
// // // p
// // // <p>​…​</p>​
// // // btn
// // // <button>​NEw button​</button>​
// // // p
// // // <p>​…​</p>​
// // // p.insertAdjacentElement('beforebegin');
// // // VM1876:1 Uncaught TypeError: Failed to execute 'insertAdjacentElement' on 'Element': 2 arguments required, but only 1 present.
// // //     at <anonymous>:1:3
// // // (anonymous) @ VM1876:1Understand this errorAI
// // // p.insertAdjacentElement('beforebegin',btn);
// // // <button>​NEw button​</button>​


// // // remove child 
// // // let body=document.querySelector("button");
// // // body.removeChild(btn);
// // //   practice question 
// // //    a p with red text that says hey i am red 
// //   let para1=document.createElement("p");
// //   para1.innerText="Hey i am ready ";
// //   document.querySelector("body").append(para1);
// //   para1.classList.add('red');

// // // //   a div with a black border and pink background o=color with the follwoing elements inside of it 
// // // another h1 that says im in a div 
// // // a p that says me too 
// //  let div=document.createElement('div');
// //  let h1=document.createElement('h1');
// // let para2=document.createElement('p');
// //  h1.innerText="I am inner div";
// //  para2.innerText=" Me too";
// // div.append(h1);
// // div.append(para2);
// // div.classList.add("box");
// // document.querySelector("body").append(div);
// // day 23 
// // mouse pointer event 

// //  let btns=document.querySelectorAll("button");

// // for(btn of btns){
// //   // btn.onclick=sayhello;
// //   // btn.onmouseenter=sayhello; 
// //   // btn.addEventListener("click",sayhello);
// //   btn.addEventListener("dbclick" ,function(){
// //     console.log("you db click");
// //   });
// // }

// // function sayhello(){
// //   alert("hello");
// // }

// // geneate random color 

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomcolor = getrandomcolor();
//   h3.innerText = randomcolor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor=randomcolor;

//   console.log("color updated");
// });
// function getrandomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }



// let brn=document.querySelector("button");
// let p=document.querySelector("p");
// let h3=document.querySelector("h3");

// function changeColor(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// }

// brn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// keyboard event  
// let int = document.querySelector("input");
// int.addEventListener("keydown",function(event)
// {

// console.log(event.key);
// console.log(event.code);
//   console.log("key was pressed");
// });
// let int = document.querySelector("input");
// int.addEventListener("keydown", function (event) {
//   console.log("code= ", event.code);   //Arrowup(u),ArrowDown(D),ArrowRight(L),ArrowLeft(L)
//   if (event.code == "ArrowUp") {
//     console.log("character move forword");
//   } else if (event.code == "ArrowDown") {
//     console.log("character move backword");
//   }  else if (event.code == "ArrowLeft") {
//     console.log("character move down");
//   }  else if (event.code == "ArrowRight") {
//     console.log("character move down");
//   }

// });

// extracting form data
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//      event.preventDefault();
 
//   let user= document.querySelector("#user");
//   let pass= document.querySelector("#pass");
//   console.log(user.value);
//   console.log(pass.value);
//   alert (`Hi ${user.value},your password is set to ${pass.value} `);
// });


// let inp=document.querySelector("#text");
// let p=document.querySelector("p");
// inp.addEventListener("input",function(){
//       console.log(inp.value);
//       p.innerText=inp.value;
// })

// event bubbling

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
  console.log("div was click ");
});

ul.addEventListener("click",function(event){
  event.stopPropagation();
  console.log("ul was click ");
});

for(li of lis) {
lis.addEventListener("click",function(){
  console.log("list was click ");
});
}