import HsnModel from "../schema/HsnCodeSchema.js"

export const addHsnCode = async (req, res) => {
    const {code, gst} = req.body;
    const newHsn = await HsnModel.create({code, gst});
    res.json({status:'ok' ,hsnCode: newHsn });
}

export const getHsnCode = async (req, res) => {
   const hsncodes = await HsnModel.find();
    res.json({hsncodes, status:'ok'});
} 