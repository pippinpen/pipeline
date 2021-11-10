const express = require('express');

const app = express();

const {
  PORT=4000
} = process.env

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})