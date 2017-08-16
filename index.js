const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);

app.get('/', (req, res) => {
  res.send('Hello There');
});

/* Kick Off Auth Process */
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/* Complete Auth Process */
app.get('/auth/google/callback', passport.authenticate('google'));

/*
  Declaring PORT so that we may dynamically change
  which PORT to listen to. || 5000 for dev environment
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
