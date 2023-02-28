import express from "express";
import { addVendor, deleteVendorById, getVendor, getVendorById, updateVendor } from "../controllers/vendorController.js";

export const vendorRouter = express.Router();

vendorRouter.route('/vendor').get(getVendor).post(addVendor).put(updateVendor); // TODO: check update
vendorRouter.route('/vendor/:id').get(getVendorById).delete(deleteVendorById);
