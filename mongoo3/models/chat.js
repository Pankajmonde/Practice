const mongoose = require('mongoose');


const chatScheme=new mongoose.Schema({
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    msg:{
        type:String,
        maxLenth:1000,
    },
    created_at:{
        type:Date,
        required:true,
    },   
});

const Chat=mongoose.model('Chat',chatScheme); 
module.exports=Chat;

  
