import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';
import handleRegister from './controllers/register.js';
const app = express();
const port = 3000;

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'qna',
  password: 'sql123',
  port: 5432,
})



app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.post('/register',(req,res)=>handleRegister(req, res, pool, bcrypt));

app.listen(port, () => {
    console.log(`qna-server has started http://localhost:${port}`);
})