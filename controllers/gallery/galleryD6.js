/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD6 = require("../../models/Gallery/GalleryD6");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD6 = await GalleryD6.find({});
        res.status(200).json(gallerD6)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
