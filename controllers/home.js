/**
 * Created by tigra on 25-Dec-18.
 */
const Home = require("../models/Home");

module.exports.getData = async (req, res)=>{
    try{
        const home = await Home.find({});
        res.status(200).json(home)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};