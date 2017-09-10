const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // addContent is on the helper.Mail object that this class extends
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings); // addTrackingSettings is on the helper.Mail object that this class extends
  }

  addRecipients() {
    let personalize = new helper.Personalization();
    this.recipients.forEach(r => {
      personalize.addTo(r);
    });
    this.addPersonalization(personalize); // addPersonalization is on the helper.Mail object that this class extends
  }
}

module.exports = Mailer;
