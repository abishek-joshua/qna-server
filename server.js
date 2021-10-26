import express from 'express';
import pg from 'pg';
import bcrypt from 'bcrypt';
import cors from 'cors';
import handleRegister from './controllers/register.js';
import handleQuestions from './controllers/questions.js';
import handleAsk from './controllers/ask.js';
import handleSignin from './controllers/signin.js';
import handleProfileUpdate from './controllers/profileUpdate.js';
import handleProfile from './controllers/profile.js';
import handleAnswers from './controllers/answers.js';
import handlePostAnswers from './controllers/postAnswers.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { Pool } = pg;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'qna',
  password: 'sql123',
  port: 5432,
})

app.post('/signin', (req, res) => handleSignin(req, res, pool, bcrypt));

app.post('/register', (req, res) => handleRegister(req, res, pool, bcrypt));

app.post('/profile', (req, res) => handleProfile(req, res, pool));

app.get('/', (req, res) => handleQuestions(req, res, pool));

app.post('/ask', (req, res) => handleAsk(req, res, pool));

app.post('/profile-update', (req, res) => handleProfileUpdate(req, res, pool));

app.post('/answers', (req, res) => handleAnswers(req, res, pool));

app.post('/post-answer', (req, res) => handlePostAnswers(req, res, pool));



app.listen(port, () => {
  console.log(`qna-server has started http://localhost:${port}`);
})