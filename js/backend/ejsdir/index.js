// templating

// EJS(embeddded javascript template syntax) is a templating engine that lets you generate HTML markup with plain JavaScript.

const express=require("express");
const app=express();
const path=require("path");


const port=3000;

app.use(express.static(path.join(__dirname,"public"))); // serving static files from the public folder


// using ejs 
app.set("view engine","ejs"); // setting the view engine to ejs
app.set("views",path.join(__dirname,"views")); // setting the views directory to the views folder in the current directory


app.get("/",(req,res)=>{
    res.render("home.ejs"); // rendering the home.ejs file

})



app.get("/ig/:username", (req, res) => {
    let { username: userParam } = req.params;
    const instadata = require("./data.json"); // Correct variable name
    const data = instadata[userParam]; // Access the data for the given username
    console.log(data);
    if (data) {
        res.render("instagram.ejs", { data }); // Pass the data to the EJS template
    } else {
        res.status(404).send("User not found");
    }
});


 

//passing data to ejs 
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1; // generating a random number between 1 and 6
  res.render("rolldice.ejs",{num:diceval}); // passing the random number to the rolldice.ejs file
  
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
