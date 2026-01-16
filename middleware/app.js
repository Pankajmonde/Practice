// middleware
// It is an intermediate layer that processes requests before they reach the main application logic.

//     request -> middleware -> application logic -> response

//         in express js 
// middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application’s request - response cycle.The next middleware function is commonly denoted by a variable named next.

// common middleware functions 
// methodOverride: allows using HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
// bodyParser: parses incoming request bodies in a middleware before your handlers, available under the req.body property.
// express.static: serves static files such as images, CSS files, and JavaScript files.
// express.urlencoded: parses incoming requests with urlencoded payloads.

// what do middlewares do 

//  excute any code 
//  make changes to the request and the response  objects
//  end the request -response cycle
//  call the next middleware funntion in the stack 

// ex. app.use(express.static(path.join(__dirname,"/public")));  

const express=require("express");
const ExpressError = require("./expresserror");
const app= express();


// app.use((req, res, next )=>{ 
//     // let query=req.query;
//     // console.log(query);
//     console.log("hii i   am middleware");
//     next();
    
// });   

// app.use ((req,res,next)=>{
//     console.log("hello i am second middleware");
//      return next();
//      console.log("i am not going to be executed");
    
// });

// creating utility logger middleware

// app.use((req,res,next) => {
//     req.time= new Date (Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time );
//     next();

// })  
 
//parsing  multipal middleware
// api authentication middleware use when accessing api routes
const checkToken =(req,res,next)=>{
    let {token} =req.query;
    if(token =="giveaccess"){
        next();

    }
    throw new ExpressError (401,"access denied");  
};

//error handling express default


app.use((req,res,next)=>{
    console.log("i am only for random");
    next();
})

app.get("/api",checkToken, (req,res)=>{
    res.send("data you can access api");
})
//middleware function 
app.get("/",(req,res)=>{
    res.send("hii i am root.")
})


app.get ("/random",(req,res)=>{
    res.send("hii this is random page")
})

app.get("/err",(req,res)=>{
    abcd=abcd;
});

//create an admin route and send an error with 403 status code 

app.get("/admin",(req,res)=>{
    throw new ExpressError (403,"you are not admin");
});

app.use((err,req,res, next)=>{
    let {status=403,message="some error occured"}=err;
    res.status(status).send(message);
       
});


// app.use((req,res,)=>{
//     res.status(404).send(" page not found");

// })

app.listen(3000,()=>{
    console.log("server is running on port 3000")

});





