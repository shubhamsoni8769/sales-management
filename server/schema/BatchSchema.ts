import mongoose, { Date, Schema } from "mongoose";
import { Medicine } from "./MedicineSchema";

export interface Batch {
    quantity: number;
    buyPrice: number;
    salePrice: number;
    expDate: Date;
    medicine: Medicine;
}

const batchSchema = new Schema<Batch>({
    quantity: Number,
    buyPrice: Number,
    salePrice: Number,
    expDate: Date,
    medicine: {
        type: mongoose.Schema.Types.ObjectId, ref:'Medicine'
    }
});

const BatchModel = mongoose.model('Batch', batchSchema);

export default BatchModel;
