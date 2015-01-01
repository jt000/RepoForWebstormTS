import mongooseDef = require('mongoose');

export interface IMailingListItem {
    email: string;
    dateAdded: Date;
}

export interface IMailingListItemDocument extends mongooseDef.Document, IMailingListItem { }
