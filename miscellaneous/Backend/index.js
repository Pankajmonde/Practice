const express=require("express"); 
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json()); // to parse URL-encoded bodies

app.get("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`standard get response welcome ${user}`);
})

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`standard get response welcome ${user}`);
})


app.listen(port,()=>{
    console.log(`Server is running on :${port}`);
});
