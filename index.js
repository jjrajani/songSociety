const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there', how: 'are you?' });
});

/*
  Declaring PORT so that we may dynamically change
  which PORT to listen to. || 5000 for dev environment
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
