let todo = []; 
let req = prompt("enter your request");
console.log(req);
//beacuse loop ke form mai chalti rehni chaiye  
while (true) {
    if (req=="quit") {
    console.log("quitting app");
    break;
  }
  if (req="list") { 
    console.log("__________");
    for (let i=0; i<todo.length;i++ ){
      console.log(i, todo[i]);
    }
    console.log("__________");
  } else if (req == "add") {
    let task = prompt("please enter task you want to add");
    todo.push(task);
    console.log("task added");
  }else if(req=="delete"){
    let idx = prompt("please enteer the index");
    todo.splice(idx,1); 
    console.log("task deleted"); 
  }else {
    console.log("wrong request"); 
  }
  req=prompt("please enter your request");  
}  