# PEAN Stack TODO App
A Postgres, Express, Angular, and Node TODO app.

## Installation and Development Server

1. Download and install postgres https://www.enterprisedb.com/downloads/postgres-postgresql-downloads. To use the default values in .env.EXAMPLE, set the password to `1234`
2. Clone https://github.com/ikealmighty/todo-PEAN.git
3. `npm i` in the root folder.
4. Rename .env.EXAMPLE to .env
5. Run `psql -U postgres` and enter your password from step one.
6. Inside the postgres shell, run `\i server/db/schema.sql` to set up the todo database schema
7. `\q` to exit postgres
8. In the root folder, run `npm run watch` to get the development server running!

## Kan Ban Board, process
You can view the Kan Ban board I used at https://github.com/users/IkeAlmighty/projects/4/views/1

I made it my goal to start and finish this project in one day.

## Difficulties

1. I made some hasty file structure decisions and then realized it was a mistake - which meant that I had to re-init the frontend entirely. But good to know that I was on the right track and just needed to stick to my guns!