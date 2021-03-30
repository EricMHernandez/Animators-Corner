const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// const options = {
//   headers: {
//     Authorization: config.TOKEN,
//   },
// };

app.get('/', (req, res) => {
  console.log('your server is working!');
});

app.listen(PORT, () => {
  console.log(`server listeing on port: ${PORT}`);
});
