import express from "express";
import { addMedicine, getAllMedicine, getMedicineByName } from "../controllers/medicineController.js";

export const medicineRouter = express.Router();

medicineRouter.route('/medicine').get(getAllMedicine).post(addMedicine);
medicineRouter.route('/medicineByName').get(getMedicineByName);
