const router = require('express').Router();
const data = require('../db/db.json');
const express = require('express');
const app = express();

// // POST request to add a note
// app.post('/api/notes', (req, res) => {
//   // Log that a POST request was received
//   console.log(req.body);
//   console.info(`${req.method} request received to add a note`);
// //     // Obtain existing reviews
//     fs.readFile(data, 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedNotes = JSON.parse(data);

//         // Add a new Note
//         parsedNotes.push(newReview);

//         // Write updated reviews back to the file
//         fs.writeFile(
//           data,
//           JSON.stringify(parsedNotes, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info('Successfully updated reviews!')
//         );
//       }})});

module.exports = app;
