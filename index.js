const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Dummy database for illustration purposes
const users = [];
const loans = [];
const payments = [];

// Your API routes go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
