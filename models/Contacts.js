
/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    "homeLinkName":{
        type: String
    },
    "contactsLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "addressTitle":{
        type: String
    },
    "addressTxt":{
        type: String
    },
    "phoneTitle":{
        type: String
    },
    "phoneTxt":{
        type: String
    },
    "emailTitle":{
        type: String
    },
    "emailTxt":{
        type: String
    },
    "emailLink":{
        type: String
    },
    "img":{
        type: String
    }

});

mongoose.model('contacts', contactsSchema);
module.exports = mongoose.model('contacts', contactsSchema);