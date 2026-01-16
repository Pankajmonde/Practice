const express= require('express');
const app=express();
const port= 3000;
const path= require('path');
const {v4: uuidv4}= require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method')); // Middleware to override HTTP methods

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use (express.static(path.join(__dirname,"public")));



let posts=[ 
    {
        id:uuidv4(),
    username:"pankajmonde",
    content:"Hello, this is my first post!"
    },
    {
    id:uuidv4(),
    username:"hacker",
    content:"I am  a hacker!"
    },
    {
    id:uuidv4(),
    username:"rahul ",
    content:"i am selected for GSoC 2024"
    },
];


app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts});   

});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});


app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({ id,username,content});
    
    res.redirect("/posts");

});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id); // fix here
  
    if (!post) {
      return res.status(404).send("Post not found");
    }
  
    res.render("show.ejs", { post });
  });
  

app.patch("/posts/:id",(req,res) =>{
    let {id}=req.params;
    let newContent =req.body.content;
    let post=posts.find((p) => id === p.id);
    post.content= newContent; // Update the content of the post
    console.log(post);
    res.redirect("/posts"); // Redirect to the posts page after updating
   
    
});
app.get ("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    res.render("edit.ejs",{post}); // Pass the post to the edit view

});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p) =>p .id !== id); // Filter out the post with the given id
//   res.send("Post deleted successfully"); // Send a response indicating deletion
  res.redirect("/posts"); // Redirect to the posts page after deletion
});
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

