/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD2 = require("../../models/Gallery/GalleryD2");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD2 = await GalleryD2.find({});
        res.status(200).json(gallerD2)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};