module.exports = app => {
  app.get('/api/surveys', (req, res) => {});

  app.post('/api/surveys/webhooks', (req, res) => {});

  app.post('/api/surveys', (req, res) => {
    /*
      surveyTitle
      emailSubject
      emailBodyText
      recipients - comma sperated list of emails
    */
  });
};
