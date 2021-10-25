-- @block create table users
CREATE TABLE users (
   roll_number INT PRIMARY KEY,
   user_name VARCHAR(50) UNIQUE,
   creation_date TIMESTAMP,
   about_me TEXT,
   email VARCHAR(50) NOT NULL
);
-- @block create table login_details
CREATE TABLE login_details(
   roll_number INT PRIMARY KEY REFERENCES users(roll_number),
   password_hash TEXT
);
-- @block create table questions 
CREATE TABLE questions(
   id SERIAL PRIMARY KEY,
   creation_date TIMESTAMP,
   question_text TEXT,
   roll_number INT REFERENCES users(roll_number),
   answer_count SMALLINT
);

-- @block create table answers
CREATE TABLE answers(
   id SERIAL PRIMARY KEY,
   question_id INT REFERENCES questions(id),
   answer_text TEXT,
   creation_date TIMESTAMP,
   roll_number INT REFERENCES users(roll_number)
);