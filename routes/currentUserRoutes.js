module.exports = app => {
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  /* Logout User */
  app.get('/api/logout', (req, res) => {
    // .logout() method is built in and attached by passport
    req.logout();
    res.redirect('/');
  });
};
