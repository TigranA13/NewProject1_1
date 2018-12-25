/**
 * Created by tigra on 25-Dec-18.
 */
const Footer = require("../models/Footer");

module.exports.getData = async (req, res)=>{
    try{
        const footer = await Footer.find({});
        res.status(200).json(footer)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};