const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

// creates cookie storing user info
passport.serializeUser((user, done) => {
  // user.id here is NOT googleId or facebookId,
  // it is the database ID for this user record
  done(null, user.id);
});
// returns user from stored cookie info
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      // proxy true makes http in redirect stay as https
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ facebookId: profile.id });

      if (user) return done(null, user);

      user = await new User({ facebookId: profile.id }).save();
      done(null, user);
    }
  )
);
