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

export const getAllMedicine = asyncErrorHandler(async (req: Request, res: Response) => {
   const medicines = await MedicineModel.find().populate('companyId');
    res.json({medicines, status:'ok'});
})

export const getMedicineByName = asyncErrorHandler(async (req: Request, res: Response) => {
    const {medicineName} = req.body;
    const medicines = await MedicineModel.findOne({medicineName}).populate('companyId');
     res.json({medicines, status:'ok'});
 } )

export const deleteMedicineById = asyncErrorHandler(async (req, res) => {
    // const hsncodes = await HsnModel.find();
    //  res.json({hsncodes, status:'ok'});
 } )