var mongoose = require('mongoose');

var schema = {
    email: { type: String, required: true, unique: true },
    dateAdded: { type: Date, default: Date.now }
};

var db = mongoose.connect('');

var model = db.model('MailingListItem', schema, 'mailinglist');

module.exports = model;
