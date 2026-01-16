const express=require('express');
const app= express();


console.dir(app);

let port=3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("hello , iam pankaj");

});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params; // destructuring params from the request
    let htmlStr=`<h1>hello welcome to the page of @${username} with id ${id}</h1>`; // creating a string with username and id
    res.send(htmlStr); // sending response to the client
   // res.send(`hello welcome to the page of @${username} with id ${id}`);  sending response to the client
});
app.get("/search",(req,res)=>{
    let { q}=req.query; // destructuring query parameter q from the request
    res.send(`<h1>searching for ${q}</h1>`); // sending response to the client
    // console.log(req.query); // logging the query parameters from the request
    // res.send("no result")
})



// routing

// app.get("/fruits", (req, res) => { // get request
//     console.log("request to  pankaj /fruits");
//     res.send("<h1>Fruits</h1>");
// });

// app.get("/home", (req, res) => {
//     res.send("<h1>Welcome to the home page</h1>");
// });

// app.get("*", (req, res) => { // wildcard route
//     res.send("this is a catch-all route, no other route matched");
// });

// app.post("/submit", (req, res) => { // post request
//     console.log("request to post/submit");
//     res.send("form submitted");
// });
 
// app.use((req,res)=>{
//     console.log("request recived");
//     // let code="<h1>fruits</h1>";
//     // res.send(code);
//     res.send({        //sending response to the client
//        name:"apple",
//        color:"red",
//    });
// });
