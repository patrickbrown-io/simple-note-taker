const router = require('express').Router();
const data = require('../db/db.json');
const express = require('express');
const app = express();

app.get('/api/notes', (req,res) =>
    res.status(200).json(data));

module.exports = router;

