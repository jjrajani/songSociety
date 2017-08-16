const passport = require('passport');

module.exports = app => {
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
