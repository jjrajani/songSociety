const passport = require('passport');

module.exports = app => {
  /* Kick Off Auth Process */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  /* Complete Auth Process */
  app.get('/auth/google/callback', passport.authenticate('google'));
};
