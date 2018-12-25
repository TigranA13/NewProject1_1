/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD1 = require("../../models/Gallery/GalleryD1");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD1 = await GalleryD1.find({});
        res.status(200).json(gallerD1)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};