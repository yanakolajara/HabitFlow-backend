DROP DATABASE IF EXISTS habit_flow;
CREATE DATABASE habit_flow;

\c habit_flow;

DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS users_habits;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    dob_day NUMERIC,
    CHECK (dob_day >= 1 AND dob_day <= 31),
    dob_month NUMERIC,
    CHECK (dob_month >= 1 AND dob_month <= 12),
    dob_year NUMERIC,
    CHECK (dob_year >= 1900),
    gender TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE habits(
    id SERIAL PRIMARY KEY,
    name TEXT,
    difficulty TEXT,
    description TEXT,
    icon TEXT
);

CREATE TABLE users_habits(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE,
    habit_id INTEGER REFERENCES habits (id)
    ON DELETE CASCADE
);

CREATE TABLE stats(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE,
    habit_id INTEGER REFERENCES habits (id)
    ON DELETE CASCADE,
    day NUMERIC,
    CHECK (day >= 1 AND day <= 31),
    month NUMERIC,
    CHECK (month >= 1 AND month <= 12),
    year NUMERIC,
    CHECK (year >= 2023),
    completion NUMERIC,
    CHECK (completion >= 1 OR completion <= 3),
    progress NUMERIC,
    CHECK (progress >= 1 OR progress <= 2)
);