import { Request, Response } from "express";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";
import BatchModel from "../schema/BatchSchema.js";


export const addBatch = asyncErrorHandler(async (req:Request, res:Response) => {
    console.log('Here addBatch')
    const batch = req.body;
    const newBatch = await BatchModel.create(batch);
    res.json({status:'ok', batch: newBatch });
})

export const getAllBatch = asyncErrorHandler(async (_:Request, res:Response) => {
    console.log('Here getAllBatch')
    const batches = await BatchModel.find();
    res.json({batches, status:'ok'});
})

export const getBatchById = asyncErrorHandler(async (req:Request, res:Response) => {
    console.log('Here getBatchById')
    const {id} = req.params;
    const batch = await BatchModel.findOne({_id:id});
    res.json({batch, status:'ok'});
 })

 export const getAllBatchByMedicineId = asyncErrorHandler(async (req:Request, res:Response) => {
    console.log('Here getAllBatchByMedicineId')
    const {medicineId} = req.params;
    const medicineBatch = await BatchModel.find({medicine:medicineId}).populate('medicine');
    res.json({medicineBatch, status:'ok'});
 })


export const deleteBatchById = asyncErrorHandler(async (req:Request, res:Response) => {
    console.log('Here deleteBatchById')
    const batchId = req.query; 
    const deletedBatch = (await BatchModel.findOne({_id:batchId})).delete();
    res.json({status:'ok', batch: deletedBatch });
})