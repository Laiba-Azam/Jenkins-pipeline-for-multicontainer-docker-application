// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const url = "mongodb://localhost:27017/"; // Replace with your MongoDB connection URL
// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection;

// app.use(express.json());

// try {
//     con.on('open', () => {
//         console.log('Connected to the database');
//     })
// } catch (error) {
//     console.log("Error: " + error);
// }


// const studentdata = require('./studentdata.js');

// // Routes
// app.post('/users', (req, res) => {
//     const newUser = new studentdata({
//       name: req.body.name,
//       email: req.body.email
//     });
  
//     newUser.save((err, user) => {
//       if (err) return res.status(500).send(err);
//       res.status(200).send(user);
//     });
//   });

// const port = 9000;
// app.listen(port, () => {
//     console.log('Server started on port ' + port);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentdata =require('./studentdata.js');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection_4
mongoose.connect('mongodb://mongo_5:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.post('/users', async (req, res) => {
  const newUser = new studentdata({
    name: req.body.name,
    email: req.body.email
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
