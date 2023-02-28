import express from "express";
import { addHsnCode, deleteHsnById, getHsnCode, getHsnCodeById } from "../controllers/hsnController.js";


export const hsnCodeRouter = express.Router();

hsnCodeRouter.route('/hsn').get(getHsnCode).post(addHsnCode);
hsnCodeRouter.route('/hsn/:id').get(getHsnCodeById).delete(deleteHsnById);
