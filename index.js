const express = require('express');
require('./services/passportGoogle'); // make sure services/passport file runs
require('./services/passportFacebook'); // make sure services/passport file runs

const app = express();

require('./routes/authGoogleRoutes')(app); // add auth routes to app
require('./routes/authFacebookRoutes')(app); // add auth routes to app

app.get('/', (req, res) => {
  res.send('Hello There');
});

/*
  Declaring PORT so that we may dynamically change
  which PORT to listen to. || 5000 for dev environment
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
