//  accesing data from json
//   json.parse(data method)
//   to parse a string data into a js object
// let   jsonRes={

// }

// let validres=JSON.parse(jsonRes);
// console.log(validres.fact);



// json.stringify (json ) method
// to parse a js object into json


// let student ={
//     name:"pankaj"
// }


// our first api request 
// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     response.json().then((data)=>{
//         console.log(data)
//     }); //to read data

// })
// .catch((err)=>{
//     console.log("error-",err);
// });



// asyn await 
// let url = "https://catfact.ninja/fact";
//     async function getFacts() {
//         try{
//         let res = await fetch(url);
//         let data = await res.json();
//         //   console.log(res);  
//         console.log(data.fact);
//     } catch (e) {
//         console.log("erroe -", e);
//     }
//     console.log("bye")


// axios   librabry to make http request 


// let btn=document.querySelector("button");
    
//     btn.addEventListener("click",async () =>{
//     let fact= await getFacts();
//     console.log(fact);
//     let p=document.querySelector("#fact");
//     p.innerText=fact;

// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         // let data = await res.json();
//          return res.data.fact;
//     } catch (e) {
//         console.log("erroe -", e);
//         return "No fact found"
//     }
// }

//sending headernwith api request 
// const url= "https://icanhazdadjoke.com/";
// async function getJoke() {
//     try{
//         const config= {headers:{accept :"application/json"}};
//         let res= await axios.get(url, config);
//         console.log(res.data);
//     }catch (e){
//     console.log('errror -',e);
    
// }
// }

// activity using query string 






let url ="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector('button');


btn.addEventListener("click", async()=>{
let country=document.querySelector("input").value;
console.log(country);


let colArr =await getcollages(country);
 show(colArr);
});


function show (colArr){
    let list=document.querySelector("#List")
    list.innerText="";
    for (col of colArr){
        console.log(col.name);
        let li=document.createElement("li")
        li.innerText=col.name;
        list.append(li);
}
}

async function getcollages(country) {
    try{
         let res=await axios.get(url+country);
         return res.data

    }catch (e){
        console.log('error -',e);
        return [];
    }
    
}