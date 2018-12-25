/**
 * Created by tigra on 25-Dec-18.
 */
const Contacts = require("../models/Contacts");

module.exports.getData = async (req, res)=>{
    try{
        const contacts = await Contacts.find({});
        res.status(200).json(contacts)
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};