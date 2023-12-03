const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "780888",
  database: "Demo",
});

client.on("connect",()=>{
    console.log("Database Connecton");
})
client.on("end",()=>{
    console.log("connection end");
})
module.exports = client;
