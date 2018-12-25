/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD9 = require("../../models/Gallery/GalleryD9");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD9 = await GalleryD9.find({});
        res.status(200).json(gallerD9)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
