
// custom error handling middleware in express
const express = require("express");
const app = express();
const ExpressError= require("./expresserror");


const checkToken =(req,res,next)=>{
    let {token} =req.query;
    if(token =="giveaccess"){
        next();

    }
    throw new ExpressError (401,"access denied");  
};


app.get("/api",checkToken, (req,res)=>{
    res.send("data you can access api");
})
  

 
// route that throws error
app.get("/err", (req, res) => {
    abcd = abcd; // intentional error
});
//custom handling middleware function
// error-handling middleware (MUST have 4 params)
app.use((err, req, res, next) => {
    let {status ,message}=err;
    res.status(status).send(message);
        next(err);
});

// 404 handler (always after error handler)
app.use((req, res) => {
    res.status(404).send("page not found");
});

// server start (ALWAYS LAST)
app.listen(3000, () => {
    console.log("server is running on port 3000");
});


