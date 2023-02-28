import { Request, Response } from "express";
import HsnModel from "../schema/HsnCodeSchema.js"
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

export const addHsnCode = asyncErrorHandler(async (req:Request, res:Response) => {
    const {code, gst} = req.body;
    const newHsn = await HsnModel.create({code, gst});
    res.json({status:'ok' ,hsnCode: newHsn });
})

export const getHsnCode = asyncErrorHandler(async (req:Request, res:Response) => {
   const hsncodes = await HsnModel.find();
    res.json({hsncodes, status:'ok'});
} )

export const getHsnCodeById = asyncErrorHandler(async (req:Request, res:Response) => {
    const {id} = req.query;
    const hsncode = await HsnModel.find({_id:id});
     res.json({hsncode, status:'ok'});
 } )

 export const deleteHsnById = asyncErrorHandler(async (req:Request, res:Response) => {
    const {id} = req.query; 
    const deletedHsnCode = (await HsnModel.findOne({_id:id})).delete();
    res.json({status:'ok', hsn: deletedHsnCode });
})