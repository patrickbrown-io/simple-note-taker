const express = require('express');
const htmlRoute = require('./routes/htmlroutes');

const app = express();//create app object

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Router
app.use("/",htmlRoute);

//LISTENING
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);