import { Request, Response } from "express";
import CompanyModel, { Company } from "../schema/CompanySchema.js";

export const addCompany = async (req: Request, res: Response) => {
    const company: Company = req.body;
    if(!company.name){
        console.log(' Company name cant be empty');
        res.json({status:'notOk' });
    }
    
    const newCompany = await CompanyModel.create(company);
    res.json({status:'ok', medicine: newCompany });
}

export const getAllCompany = async (req, res) => {
   const company = await CompanyModel.find();
    res.json({company, status:'ok'});
} 

// export const deleteMedicineById = async (req, res) => {
//     // const hsncodes = await HsnModel.find();
//     //  res.json({hsncodes, status:'ok'});
//  } 