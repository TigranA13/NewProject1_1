/**
 * Created by tigra on 25-Dec-18.
 */

const Gallery = require("../../models/Gallery/Gallery");

module.exports.getData = async (req, res)=>{
    try{
        const gallery = await Gallery.find({});
        res.status(200).json(gallery);
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};