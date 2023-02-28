import express from "express";
import { addMedicine, deleteMedicineById, getAllMedicine, updateMedicineById } from "../controllers/medicineController.js";

export const medicineRouter = express.Router();

medicineRouter.route('/medicine').get(getAllMedicine).post(addMedicine);
medicineRouter.route('/medicine/:id').delete(deleteMedicineById).patch(updateMedicineById);
