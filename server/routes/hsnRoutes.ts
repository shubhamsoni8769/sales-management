import express from "express";
import { addHsnCode, getHsnCode, getHsnCodeById } from "../controllers/hsnController.js";


export const hsnCodeRouter = express.Router();

hsnCodeRouter.route('/hsn').get(getHsnCode).post(addHsnCode);
hsnCodeRouter.route('/hsnById/:id').get(getHsnCodeById);
