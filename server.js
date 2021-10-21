import express, { response } from 'express';
import pg from 'pg';
import bcrypt, { compareSync } from 'bcrypt';
import handleRegister from './controllers/register.js';
import handleAsk from './controllers/ask.js';
import handleQuestions from './controllers/questions.js';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'qna',
  password: 'sql123',
  port: 5432,
})

app.get('/', (req, res) => handleQuestions(req, res, pool));

app.post('/register', (req, res) => handleRegister(req, res, pool, bcrypt));

app.post('/ask', (req, res) => handleAsk(req, res, pool));

app.listen(port, () => {
  console.log(`qna-server has started http://localhost:${port}`);
})