/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    "homeLinkName":{
        type: String
    },
    "servicesLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "contentH4":{
        type: String
    },
    "P_1":{
        type: String
    },
    "P_2":{
        type: String
    },
    "P_3":{
        type: String
    },
    "P_4":{
        type: String
    }

});

mongoose.model('services', servicesSchema);
module.exports = mongoose.model('services', servicesSchema);