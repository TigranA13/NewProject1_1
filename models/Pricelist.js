/**
 * Created by tigra on 25-Dec-18.
 */
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const pricelistSchema = new Schema({
    "homeLinkName":{
        type: String
    },
    "priclistLinkName":{
        type: String
    },
    "mainH4":{
        type: String
    },
    "catalog":[
        {
            "name":{
                type: String
            },
            "th_1":{
                type: String
            },
            "th_2":{
                type: String
            },
            "th_3":{
                type: String
            },
            "th_4":{
                type: String
            },
            "td_1":{
                type: String
            },
            "td_2":{
                type: String
            },
            "td_3":{
                type: String
            },
            "td_4":{
                type: String
            },
            "td_5":{
                type: String
            },
            "td_6":{
                type: String
            },
            "td_7":{
                type: String
            },
            "td_8":{
                type: String
            },
            "td_9":{
                type: String
            },
            "td_10":{
                type: String
            },
            "td_11":{
                type: String
            },
            "td_12":{
                type: String
            },
            "td_13":{
                type: String
            },
            "td_14":{
                type: String
            },
            "td_15":{
                type: String
            },
            "td_16":{
                type: String
            },
            "td_17":{
                type: String
            },
            "td_18":{
                type: String
            },
            "td_19":{
                type: String
            },
            "td_20":{
                type: String
            },
            "link":{
                type: String
            },
        }
    ]

});

mongoose.model('pricelist', pricelistSchema);
module.exports = mongoose.model('pricelist', pricelistSchema);