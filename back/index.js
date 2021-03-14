const express = require('express');
const app = express();


const router = require('./routes/index');

const cors = require('cors');
app.use(cors());
app.options('*', cors());
// app.use(router);


/*
* */
const config = require('./config/db');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

const Stats = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Stats
    .create({ name:"Мердж-реквест" })
    .catch(err => console.log(err));

// const mysql = require("mysql2");
// const pool = mysql.createPool({
//     connectionLimit: 5,
//     host: "localhost",
//     user: "root",
//     database: "express",
//     password: "root"
// });
//
// app.get('/users',  (req, res) => {
//     pool.query("SELECT * FROM users", (err, data) => {
//         if(err) return console.log(err);
//         res.send(data);
//     });
// });
// app.get('/users/:id',  (req, res) =>
// {
//     pool.query("SELECT * FROM users WHERE id="+req.params.id, (err, data) => {
//         if(err) return console.log(err);
//         res.send(data);
//     });
// });


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
});
