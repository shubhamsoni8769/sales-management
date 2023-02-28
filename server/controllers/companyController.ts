import { Request, Response } from "express";
import CompanyModel, { Company } from "../schema/CompanySchema.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

export const addCompany = asyncErrorHandler(async (req: Request, res: Response) => {
    const company: Company = req.body;
    if(!company.name){
        console.log(' Company name cant be empty');
        res.json({status:'notOk' });
    }
    
    const newCompany = await CompanyModel.create(company);
    res.json({status:'ok', medicine: newCompany });
})

export const getAllCompany = asyncErrorHandler(async (req, res) => {
   const company = await CompanyModel.find();
    res.json({company, status:'ok'});
} )

export const deleteCompanyById = asyncErrorHandler(async (req:Request, res:Response) => {
    const {id} = req.query; 
    const deletedCompany = (await CompanyModel.findOne({_id:id})).delete();
    res.json({status:'ok', company: deletedCompany });
})