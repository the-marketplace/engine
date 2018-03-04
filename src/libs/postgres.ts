import * as k from 'knex';
import * as pg from 'pg-promise';
import * as sql from 'sql-template-strings';

// dotenv is called before this
const connection = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

// Allows Promises for PostgreSQL
const pgp = pg();
// Create database object
const db = pgp(connection);
// Create object for query builder
const knex = k({ client: 'pg', connection });

export { db, knex, pgp, sql };
