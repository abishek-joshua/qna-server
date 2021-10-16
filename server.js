const express = require('express');
const app = express();
const port = 3000;

let new_user = {
    roll_number: 61561,
    user_name: "Shuruthi Velraj",
    creation_date: '04-10-2000',
    about_me: 'TCE Student',
    email: 'shuruthi@student.tce.edu'
}


//
const {Client} = reqire('pg');
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'qna',
  password: 'sql123',
  port: 5432,
})
db.connect()


app.get('/', (req, res) => {
    res.send('Hello!');
})

app.post('/register',(req,res)=>{
    console.log(req);
    res.json("Register is working!!!!!!!!");
} );


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})