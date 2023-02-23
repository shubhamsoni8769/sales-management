import { Request, Response } from "express";
import MedicineModel, { Medicine } from "../schema/MedicineSchema.js";

export const addMedicine = async (req: Request, res: Response) => {
    try{const medicine: Medicine = req.body;
    if(!medicine.medicineName){
        console.log(' Medicine name cant be empty');
        res.json({status:'notOk' });
    }
    
    const newMedicine = await MedicineModel.create(medicine);
    res.json({status:'ok', medicine: newMedicine });}
    catch(e){
        console.log(e);
    }
}

export const getAllMedicine = async (req: Request, res: Response) => {
   const medicines = await MedicineModel.find().populate('companyId');
    res.json({medicines, status:'ok'});
}

export const getMedicineByName = async (req: Request, res: Response) => {
    const {medicineName} = req.body;
    const medicines = await MedicineModel.findOne({medicineName}).populate('companyId');
     res.json({medicines, status:'ok'});
 } 

export const deleteMedicineById = async (req, res) => {
    // const hsncodes = await HsnModel.find();
    //  res.json({hsncodes, status:'ok'});
 } 