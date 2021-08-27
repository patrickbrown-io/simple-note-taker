const express = require('express');
const htmlRoute = require('./routes/htmlroutes');
const apiRoute = require('./routes/apiroutes');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Router Middleware
app.use("/",htmlRoute);
app.use('/api/notes',apiRoute);

//Get
const data = require('./db/db.json');
app.get('/api/notes', (req,res) =>
    res.status(200).json(data));


//LISTENING
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);