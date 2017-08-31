const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
/* Models */
require('./models/User');
require('./models/Survey');
/* Connect mongoose to our MongoDB on mLab*/
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
// tell app to use cookie-session
// maxAge read in milliseconds
// so for 30 days...
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // Hide keys in .gitignore config file
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

/* Auth Services */
require('./services/passportGoogle');
require('./services/passportFacebook');

/* Auth Routes */
require('./routes/authGoogleRoutes')(app);
require('./routes/authFacebookRoutes')(app);
require('./routes/currentUserRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will server produciton assets
  // like main.js or main.css
  app.use(express.static('client/build'));
  // Express will server index.html if doesn't
  // recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
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
