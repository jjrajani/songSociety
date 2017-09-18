export default [
    {
        label: 'Campaign Title',
        name: 'title',
        noValueError: 'You must provide a Survey Title.'
    },
    {
        label: 'Subject Line',
        name: 'subject',
        noValueError: 'You must provide a Subject Line.'
    },
    {
        label: 'Email Body',
        name: 'body',
        noValueError: 'You must provide an Email Body.'
    },
    {
        label: 'Recipient List',
        name: 'recipients',
        noValueError: 'You must provide at least one Recipient.',
        inValidFormatError:
            'Emails must be a comma separated list of email addresses.'
    }
];
