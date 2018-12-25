/**
 * Created by tigra on 25-Dec-18.
 */
const About = require("../models/About");

module.exports.getData = async (req, res)=>{
    try{
        const about = await About.find({});
        res.status(200).json(about)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};