If you'd like to set up the database to test the queries against, do the following steps:

1. Ensure you have psql and Postgres installed on your machine (should already have this at this point in the curriculum)
2. From this project folder, enter `psql` using the regular command
3. Create a new db with `CREATE DATABASE sql_intro`. The name of the db is actually irrelevant for this case, but give it something meaninful
4. Connect to the database using `\c sql_intro`
5. Execute the setup script by typing `\i db/setup.sql`
6. Execute the seeding script by typing `\i db/seeds.sql`

You are ready to run queries!
