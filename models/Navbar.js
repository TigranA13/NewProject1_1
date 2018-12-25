/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const navbarSchema = new Schema({

    logo:{
        type: String
    },
    phoneIcon:{
        type: String
    },
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
    zakazatZvonok:{
        type: String
    }

});

mongoose.model('navbar', navbarSchema);
module.exports = mongoose.model('navbar', navbarSchema);