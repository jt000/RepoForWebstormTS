import mongoose = require('mongoose');

import types = require('./types');

var schema: any = {
    email: { type: String, required: true, unique: true },
    dateAdded: { type: Date, default: Date.now }
};

var db = mongoose.connect('');

var model: mongoose.Model<types.IMailingListItemDocument> =
    db.model<types.IMailingListItemDocument>('MailingListItem', schema, 'mailinglist');

export = model;
