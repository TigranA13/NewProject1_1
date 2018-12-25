/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD8 = require("../../models/Gallery/GalleryD8");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD8 = await GalleryD8.find({});
        res.status(200).json(gallerD8)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
}
