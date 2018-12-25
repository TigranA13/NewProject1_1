/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    "homeLinkName":{
        type: String
    },
    "aboutUsLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "sideH4_1":{
        type: String
    },
    "li_1":{
        type: String
    },
    "li_2":{
        type: String
    },
    "li_3":{
        type: String
    },
    "li_4":{
        type: String
    },
    "li_5":{
        type: String
    },
    "li_6":{
        type: String
    },

    "contentH4":{
        type: String
    },
    "h6_1":{
        type: String
    },
    "p_1":{
        type: String
    },
    "h6_2":{
        type: String
    },
    "p_2":{
        type: String
    },
    "h6_3":{
        type: String
    },
    "p_3":{
        type: String
    }

});

mongoose.model('about', aboutSchema);
module.exports = mongoose.model('about', aboutSchema);