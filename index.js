const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

/* Models */
require('./models/User');
/* Connect mongoose to our MongoDB on mLab*/
mongoose.connect(keys.mongoURI);

/* Auth Services */
require('./services/passportGoogle');
require('./services/passportFacebook');

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
