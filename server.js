import express, { response } from 'express';
import pg from 'pg';
import bcrypt, { compareSync } from 'bcrypt';
import bodyParser from 'body-parser';
import handleRegister from './controllers/register.js';
import handleAsk from './controllers/ask.js';
import handleQuestions from './controllers/questions.js';
import cors from 'cors';
import handleSignin from './controllers/signin.js';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/signin', (req,res) => handleSignin(req,res,pool,bcrypt));




app.listen(port, () => {
  console.log(`qna-server has started http://localhost:${port}`);
})