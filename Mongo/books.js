// schema validation
const mongoose = require('mongoose');
main()
    .then((res) => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}   

const bookscheme = new mongoose.Schema({
    title: {
        type: String,
        required: true, // title is required validation
        maxLength: 10, // max length validation
    },

    author: {
        type: String,
    },

    price: {
        type: Number,
    },

    discount: {
        type: Number,
        default: 0, // default value for discount
    },

    genre: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Science', 'Biography', 'Fantasy'], // genre must be one of these values
        required: true, // genre is required
    },
});

const Book = mongoose.model("Book", bookscheme);

let book1 = new Book({
    title: "Rich Dad",
    author: "Robert Kiyosaki",
    price: 399,
    genre: "Non-Fiction",
});

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });