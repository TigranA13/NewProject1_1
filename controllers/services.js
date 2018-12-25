/**
 * Created by tigra on 25-Dec-18.
 */
const Services = require("../models/Services");

module.exports.getData = async (req, res)=>{
    try{
        const services = await Services.find({});
        res.status(200).json(services)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};