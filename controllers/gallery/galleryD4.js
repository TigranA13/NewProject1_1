/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD4 = require("../../models/Gallery/GalleryD4");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD4 = await GalleryD4.find({});
        res.status(200).json(gallerD4)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
