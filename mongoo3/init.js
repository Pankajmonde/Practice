const mongoose = require('mongoose');
const Chat = require("./models/chat.js"); // Renamed to `Chat` for clarity

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp'); // Fixed typo in database name
}

let allchats = [
  {
    from: 'na',
    to: 'gyuy',
    msg: 'hello ',
    created_at: new Date(),
  },
  {
    from: 'pankaj',
    to: 'neda',
    msg: 'hello sis',
    created_at: new Date(),
  },
  {
    from: 'sakshi',
    to: 'okan',
    msg: 'how are you?',
    created_at: new Date(),
  },
  {
    from: 'sam',
    to: 'bob',
    msg: 'i am fine',
    created_at: new Date(),
  },
  {
    from: 'nedda',
    to: 'ankit',
    msg: 'what about you?',
    created_at: new Date(),
  },
  {
    from: 'ankit',
    to: 'neha',
    msg: 'i am also good',
    created_at: new Date(),
  },
];

// Insert the chats into the database
Chat.insertMany(allchats)
  .then(() => {
    console.log("Chats inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting chats:", err);
  });