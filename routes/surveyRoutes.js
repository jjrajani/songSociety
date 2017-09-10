const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    console.log('survey created', survey);

    const mailer = new Mailer(survey, surveyTemplate(survey));
  });

  app.post('/api/surveys/webhooks', (req, res) => {});

  app.get('/api/surveys', (req, res) => {
    /*
      surveyTitle
      emailSubject
      emailBodyText
      recipients - comma sperated list of emails
    */
  });
};
