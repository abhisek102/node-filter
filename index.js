const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const age = [18, 23, 15, 55, 12, 19, 13];
  const data = age.filter(filtered);
  function filtered(age) {
    return age >= 18;
  }
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
