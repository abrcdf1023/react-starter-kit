const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.posix.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.posix.join(__dirname, 'dist/index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
