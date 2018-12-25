/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({

    "homeLinkName":{
            type: String
    },
    "galleryLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "P_1":{
        type: String
    },
    "P_2":{
        type: String
    },
    "catalog":[
        {
            "name": {
                type: String
            },
            "img1": {
                type: String
            },
            "img2": {
                type: String
            },
            "link":{
                type: String
            }
        }
    ]

});

mongoose.model('gallery', gallerySchema);
module.exports = mongoose.model('gallery', gallerySchema);