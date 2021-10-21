import { createRequire } from "module";
import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';

const require = createRequire(import.meta.url);
var users = require("./sampleData/users.json");
var login_details = require("./sampleData/login_details.json");
var questions = require("./sampleData/questions.json");
var answers = require("./sampleData/answers.json");

const { Pool } = pg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'qna',
    password: 'sql123',
    port: 5432,
})

users.forEach(val => {
    pool
        .query('INSERT INTO users VALUES($1, $2, $3, $4, $5)', Object.values(val))
        .then(result => console.log("users added into db.  "))
        .catch(console.log)
});

login_details.forEach(val => {
    const valArr = Object.values(val);
    const password = bcrypt.hashSync(valArr[1], 3);
    pool
        .query('INSERT INTO login_details VALUES($1, $2)', [valArr[0], password])
        .then(result => console.log("login_details added into db.  "))
        .catch(console.log);
});

questions.forEach(val => {
    pool
        .query('INSERT INTO questions VALUES($1, $2, $3, $4, $5)', Object.values(val))
        .then(result => console.log("questions added into db.  "))
        .catch(console.log)
})

answers.forEach(val => {
    pool
        .query('INSERT INTO answers VALUES($1, $2, $3, $4, $5)', Object.values(val))
        .then(result => console.log("answers added into db.  "))
        .catch(console.log)
});


