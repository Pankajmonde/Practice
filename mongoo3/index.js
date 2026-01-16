const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js'); // Ensure the model is imported correctly
const ExpressError =require('./express error.js');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhastapp');
}

// index route 
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
});

//new route

app.get("/chats/new", (req, res) => {
    throw new ExpressError(404,"page not found");
    res.render("new.ejs");
});

//   create route

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    newChat.save().then(res => { console.log("chat was save") }).catch(err => { console.log("error in saving chat") });
    res.redirect("/chats");
});
// Corrected the capitalization of the Chat model
let chat1 = new Chat({
    from: 'neha',
    to: 'ankit',
    msg: 'hello brooooooooo',
    created_at: new Date(),
});

chat1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error('Error saving chat:', err);
    });


//new show route 

app.get("/chats/:id", async (req,res,next)=>{
    let {id}=req,params;
    let chat =await Chat.findById(id);
    if (!chat){
       next( new ExpressError (404,"chat not found"));  
    }
    res.render("edit.ejs",{chat});
});

    // edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    console.log("Chat ID:", id); // Debugging
    try {
        let chat = await Chat.findById(id);
        if (!chat) {
            return res.status(404).send("Chat not found");
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        console.error("Error fetching chat:", err);
        res.status(500).send("Server error");
    }
});

app.get('/', (req, res) => {
    res.send('working');
});
//error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"}=err;
    res.status(status).send(message);
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});