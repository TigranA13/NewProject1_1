/**
 * Created by tigra on 25-Dec-18.
 */
const Navbar = require("../models/Navbar");

module.exports.getData = async (req, res)=>{
    try{
        const navbar = await Navbar.find({})
        res.status(200).json(navbar)
    }catch (e) {
        res.status(500).json({
        success: false,
        message: e.message ? e.message : e
    })
    }
};