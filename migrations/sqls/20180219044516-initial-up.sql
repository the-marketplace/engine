CREATE SCHEMA IF NOT EXISTS public;

-- Extensions
CREATE EXTENSION postgis;

-- Enums
CREATE TYPE GENDER AS ENUM('male', 'female', 'other');

-- Tables

-- TODO: Add profile picture to accounts
-- TODO: Add tags table and bridging table to listings
-- TODO: Add ratings linked to listings and account
-- TODO: Add images to listings

CREATE TABLE accounts(
    id SERIAL PRIMARY KEY,
    email VARCHAR(75) UNIQUE NOT NULL,
    phone VARCHAR(16),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    position POINT NOT NULL,
    birthdate DATE,
    gender GENDER,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    subscribed BOOLEAN DEFAULT FALSE NOT NULL,
    last_seen TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

CREATE TABLE roles (
    name VARCHAR(25) PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE accounts_roles (
    account INTEGER REFERENCES accounts (id) ON DELETE CASCADE NOT NULL,
    role VARCHAR(25) REFERENCES roles (name) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (account, role)
);

create table languages (
    code varchar(2) primary key,
    name varchar(30)
);

CREATE TABLE listings(
    id SERIAL PRIMARY KEY,
    account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    views INTEGER DEFAULT 0 NOT NULL,
    UNIQUE(id, account_id)
);

CREATE TABLE listings_i18n(
    listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE NOT NULL,
    language VARCHAR(2) REFERENCES languages(code) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (listing_id, language)
)