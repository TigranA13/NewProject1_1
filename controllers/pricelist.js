/**
 * Created by tigra on 25-Dec-18.
 */
const Pricelist = require("../models/Pricelist");

module.exports.getData = async (req, res)=>{
    try{
        const pricelist = await Pricelist.find({});
        res.status(200).json(pricelist)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};