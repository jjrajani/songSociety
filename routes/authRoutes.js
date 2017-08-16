const passport = require('passport');

module.exports = app => {
  /* Kick Off Google Auth Process */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  /* Complete Google Auth Process */
  app.get('/auth/google/callback', passport.authenticate('google'));

  /* Kick Off Facebook Auth Process */
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );

  /* Complete Facebook Auth Process */
  app.get('/auth/facebook/callback', passport.authenticate('facebook'));
};
