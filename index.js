function go() {
    'use strict';

    var MailingListItem = require('./mailinglistitem');

    var item = new MailingListItem({
        email: 'email@domain.com'
    });
}
exports.go = go;
