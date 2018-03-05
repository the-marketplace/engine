# :construction: themarketplace engine

Backend for **themarketplace**. Consists of a GraphQL backend.

## How to Run

### Prerequesites
- Node 6
- yarn or npm

#### engine
- postgres
- `.env` (ask a dev)

### Install packages
```bash
$ yarn
```

### Engine
```bash
$ cd packages/engine
```
(command should be added to root `package.json` eventually)

As this is in early stage, it is recommended to run your own local database as the dev database might not be up (replace the needed values in your `.env` and run `yarn migrate-up`.

You should later by able to use `yarn start` to run your graphql, but at this stage it is not yet set up.

#### Creating migrations
```bash
$ yarn db-migrate create [migration_name] --sql-file
```
This will create a `[date_created]-[migration_name]-down.sql`, `[date_created]-[migration_name]-up.sql` and `[date_created]-[migration_name].js` in corresponding folders. You can then go in the sql files and write your SQL queries.

