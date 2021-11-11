const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// Fill Out the API Routes to Perform RESTful CRUD Operations √
// Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models. √
// Note that the functionality for creating the many-to-many relationship for products has already been completed for you. √ 🎉

// Hint: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes! √√√ would've been impossible without the mini-project! lol.


// Seed the Database
// After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes. √

// Sync Sequelize to the Database on Server Start √
// Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start. √