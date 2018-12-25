/**
 * Created by tigra on 25-Dec-18.
 */
/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const footerSchema = new Schema({

    home:{
        type: String
    },
    aboutus:{
        type: String
    },
    gallery:{
        type: String
    },
    services:{
        type: String
    },
    pricelist:{
        type: String
    },
    contacts:{
        type: String
    },
    addressTitle:{
        type: String
    },
    addressTxt:{
        type: String
    },
    phoneTitle:{
        type: String
    },
    phoneTxt:{
        type: String
    },
    emailTitle:{
        type: String
    },
    emailTxt:{
        type: String
    },
    emailLink:{
        type: String
    },
    linksTitle:{
        type: String
    },
    fbIcon:{
        type: String
    },
    fbLink:{
        type: String
    },
    vkIcon:{
        type: String
    },
    vkLink:{
        type: String
    },
    instagramIcon:{
        type: String
    },
    instagramLink:{
        type: String
    },
    mailTo:{
        type: String
    }

});

mongoose.model('footer', footerSchema);
module.exports = mongoose.model('footer', footerSchema);