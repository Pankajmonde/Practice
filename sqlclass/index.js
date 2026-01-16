const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Pankaj@1234#'
});


//inserting new data
let q = "INSERT INTO user (id, username, email, password) VALUES ( ?,?,?,?)"; //
let user = ["123", "123_newuser", "abc@gmil.com", "abc"];
try {
  connection.query(q, user, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();


let createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),

  };
}

//   console.log(createRandomUser());