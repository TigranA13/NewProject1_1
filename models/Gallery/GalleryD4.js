
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const galleryD4Schema = new Schema({

    "homeLinkName":{
        type: String
    },
    "galleryLinkName":{
        type: String
    },
    "galleryDetailsLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "p_1":{
        type: String
    },
    "button_1":{
        type: String
    },
    "button_2":{
        type: String
    },
    "catalog":[
        {
            "id":{
                type: String
            },
            "name":{
                type: String
            },
            "img":{
                type: String
            },
            "price":{
                type: String
            },
            "text":{
                type: String
            },
            "td1":{
                type: String
            },
            "td2":{
                type: String
            },
            "td3":{
                type: String
            },
            "td4":{
                type: String
            },
            "td5":{
                type: String
            },
            "td6":{
                type: String
            }
        }
    ]


});

mongoose.model('galleryD4', galleryD4Schema);
module.exports = mongoose.model('galleryD4', galleryD4Schema);
