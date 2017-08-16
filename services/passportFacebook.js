const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys');

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('facebook access token', accessToken);
      console.log('facebook refreshToken', refreshToken);
      console.log('facebook profile', profile);
    }
  )
);
