import express from "express";
import { addCompany, deleteCompanyById, getAllCompany } from "../controllers/companyController.js";

export const companyRouter = express.Router();

companyRouter.route('/company').get(getAllCompany).post(addCompany);
companyRouter.route('/company/:id').delete(deleteCompanyById);
companyRouter.route('/companyByName').get(getAllCompany)
