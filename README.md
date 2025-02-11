# PEAN Stack TODO App

A Postgres, Express, Angular, and Node TODO app.

## Installation and Development Server

1. Download and install postgres https://www.enterprisedb.com/downloads/postgres-postgresql-downloads. To use the default values in .env.EXAMPLE, set the password to `1234`
2. Clone https://github.com/ikealmighty/todo-PEAN.git
3. `npm i` in the root folder.
4. Copy the.env.EXAMPLE to a new .env
5. Run `psql -U postgres` and enter your password from step one.
6. Inside the postgres shell, run `\i server/db/schema.sql` to set up the todo database schema
7. `\q` to exit postgres
8. In the root folder, run `npm run dev` to get the development server running!

## Kan Ban Board, process

You can view the Kan Ban board I used at https://github.com/users/IkeAlmighty/projects/4/views/1

I made it my goal to start and finish this project in one day. I ended up finishing it in about 2 days, a total of around 7 hours. I would have been much faster if I was familiar with Angular.

## Difficulties

1. I made some hasty file structure decisions and then realized it was a mistake - which meant that I had to re-init the frontend entirely. But good to know that I was on the right track and just needed to stick to my guns!

2. Learning Angular!!! I have barely scratched the surface. I enjoyed the component and service generation cli tool. I did not enjoy the templating engine or the massive amount of plugins required to send a fetch request. I also could not figure out an elegant way to capture all the backend api routes in the proxy configuration. I imagine angular shines in larger and more complicated apps, but for a simple todo app it was pretty overkill. I imagine that I will have more positive opinions as I learn more about the framework.

3. So much Boilerplate and configuration. But then, that was kind of what I expected - I wasn't building anything complicated so the amount of time I spent on boilerplate of course would end up being larger feeling than normal juxtaposed against the amuont of actual coding I was doing.

4. I did not deploy the app! This is something I decided is not nessecary.
