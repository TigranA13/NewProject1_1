/**
 * Created by tigra on 25-Dec-18.
 */
/**
 * Created by tigra on 25-Dec-18.
 */
/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({

    "sImg1":{
        type: String
    },
    "sImg2":{
        type: String
    },
    "sImg3":{
        type: String
    },
    "sImg4":{
        type: String
    },
    "h4_1":{
        type: String
    },
    "h4_2":{
        type: String
    },
    "h4_3":{
        type: String
    },
    "h4_4":{
        type: String
    },
    "info1":[
        {
            "cardImg":{
                type: String
            },
            "h5":{
                type: String
            },
            "p":{
                type: String
            }
        }
    ],
    "info2":[
        {
            "smallImg":{
                type: String
            }
        }
    ],
    "info3":[
        {
            "lastCardImg":{
                type: String
            },
            "lastH5":{
                type: String
            },
            "lastP":{
                type: String
            }
        }
    ]

});

mongoose.model('home', homeSchema);
module.exports = mongoose.model('home', homeSchema);