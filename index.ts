import types = require('./types');
import MailingListItemDef = require('./mailinglistitem');

export function go(): void {
    'use strict';

    var MailingListItem: typeof MailingListItemDef = require('./mailinglistitem');

    var item: types.IMailingListItemDocument = new MailingListItem({
        email: 'email@domain.com'
    });
}