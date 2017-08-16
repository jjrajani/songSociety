const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

/* Auth Services */
require('./services/passportGoogle');
require('./services/passportFacebook');

/* Connect mongoose to our MongoDB on mLab*/
mongoose.connect(keys.mongoURI);

const app = express();

/* Auth Routes */
require('./routes/authGoogleRoutes')(app);
require('./routes/authFacebookRoutes')(app);

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
