import {Router} from "express";
import { addBatch, deleteBatchById, getAllBatch, getAllBatchByMedicineId, getBatchById } from "../controllers/batchController.js";

export const batchRouter = Router();

batchRouter.route('/batch/:id').get(getBatchById).delete(deleteBatchById);
batchRouter.route('/batch').get(getAllBatch).post(addBatch);

batchRouter.route('/batchByMedicineId/:medicineId').get(getAllBatchByMedicineId)
