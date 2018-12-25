/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD7 = require("../../models/Gallery/GalleryD7");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD7 = await GalleryD7.find({});
        res.status(200).json(gallerD7)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
