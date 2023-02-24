import { Request, Response } from "express";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";
import VendorModel from "../schema/VendorSchema.js";


export const addVendor = asyncErrorHandler(async (req:Request, res:Response) => {
    const vendor = req.body;
    const newVendor = await VendorModel.create(vendor);
    res.json({status:'ok', vendor: newVendor });
})

export const getVendor = asyncErrorHandler(async (_:Request, res:Response) => {
    const vendor = await VendorModel.find();
    res.json({vendor, status:'ok'});
})

export const getVendorAll = asyncErrorHandler(async (_:Request, res:Response) => {
    const vendor = await VendorModel.find();
    res.json({vendor, status:'ok'});
})

export const getVendorById = asyncErrorHandler(async (req:Request, res:Response) => {
    const {id} = req.query;
    const vendor = await VendorModel.findOne({_id:id});
    res.json({vendor, status:'ok'});
 })

 // TODO: complete update logic for put
 export const updateVendor = asyncErrorHandler(async (req:Request, res:Response) => {

    const updatedVendor = req.body;
    const existingVendor = await VendorModel.findOne({_id:updatedVendor._id}).update(updatedVendor);
    res.json({status:'ok', vendor: existingVendor });

})

export const deleteVendorById = asyncErrorHandler(async (req:Request, res:Response) => {
    const vendorId = req.query; 
    const deletedVendor = (await VendorModel.findOne({_id:vendorId})).delete();
    res.json({status:'ok', vendor: deletedVendor });
})