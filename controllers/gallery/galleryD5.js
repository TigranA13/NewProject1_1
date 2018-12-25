/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD5 = require("../../models/Gallery/GalleryD5");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD5 = await GalleryD5.find({});
        res.status(200).json(gallerD5)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
