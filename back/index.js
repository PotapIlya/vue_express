const express = require('express');
const app = express();
const router = require('./routes/index');

const cors = require('cors');

app.use(cors());
app.options('*', cors());
// app.use(router);

const mysql = require("mysql2");
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "express",
    password: "root"
});

app.get('/users',  (req, res) => {
    pool.query("SELECT * FROM users", (err, data) => {
        if(err) return console.log(err);
        res.send(data);
    });
});
app.post('/users',  (req, res) => {
    pool.query("SELECT * FROM users", (err, data) => {
        if(err) return console.log(err);
        res.send(data);
    });
});


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
});
