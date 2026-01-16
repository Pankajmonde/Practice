const mongoose = require('mongoose');
main()
    .then((res) => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}    

// scheme  defines the structure of the document
const userscheme =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

// model is a class with which we construct documents
const User =mongoose.model("User",userscheme);

// mogoose uses opration buffering
// User.insertMany([
//     {name:"tony", email:"toneystark@gmail.com,", age:45},
//     {name:"alice", email:"alicestark@gmail.com,", age:55},
//     {name:"bob", email:"bobstark@gmail.com,", age:25},
// ]).then((res)=>{
//     console.log(res);
// } ); 
// create a document
// const user2=new User({
//     name:"eva",
//     email:"evam@yahoo.in",
//     age:21,
    
// }); 
// user2
// .save()
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// }); // save the document to the database


// updating

// User.updateOne({name:"tony"},{age:46})
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });

//update many 
// User.updateMany({age: {$gt :45 }},{age: 60})
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name :"tony"},{age :40})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// });

// delete 


// User.deleteOne({name: "bob"}).then((res)=>{
//     console.log(res);
// });


User.findByIdAndDelete('68ea1bdaba53370338c60997').then((res)=>{
    console.log(res);
});

//schema validation  