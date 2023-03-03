import { Request, Response } from "express";
import MedicineModel, { Medicine } from "../schema/MedicineSchema.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";
import { BadRequestError } from "../errors/ApiError.js";

export const addMedicine = asyncErrorHandler(async (req: Request, res: Response) => {
const medicine: Medicine = req.body;
    if(!medicine.medicineName){
        throw new BadRequestError('Medicine name cant be empty!!');
    }
    
    const newMedicine = await MedicineModel.create(medicine);
    res.json({status:'ok', medicine: newMedicine });
})

export const getAllMedicine = asyncErrorHandler(async (_: Request, res: Response) => {
   const medicines = await MedicineModel.find().populate('companyId');
    res.json({medicines, status:'ok'});
})


export const getAllBatchesByMedicineId = asyncErrorHandler(async (_: Request, res: Response) => {
    const medicineBatches = await MedicineModel.find().populate('batchIds');
     res.json({medicineBatches, status:'ok'});
 })

export const deleteMedicineById = asyncErrorHandler(async (req, res) => {
    const {id} = req.query; 
    const deletedMedicine = (await MedicineModel.findOne({_id:id})).delete();
    res.json({status:'ok', hsn: deletedMedicine });
 })

export const updateMedicineById = asyncErrorHandler(async (req:Request, res:Response) => {
    const {id} = req.query;
    const updatedMedicine =  req.body;
    const deletedMedicine = await MedicineModel.findById(id).updateOne(updatedMedicine);
    res.json({status:'ok', hsn: deletedMedicine });
})
