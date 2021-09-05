CREATE DATABASE scavenger;

\c scavenger

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);