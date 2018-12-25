/**
 * Created by tigra on 25-Dec-18.
 */
const GalleryD3 = require("../../models/Gallery/GalleryD3");

module.exports.getData = async (req, res)=>{
    try{
        const gallerD3 = await GalleryD3.find({});
        res.status(200).json(gallerD3)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
