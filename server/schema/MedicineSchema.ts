import mongoose, { Schema } from 'mongoose';
import { Company } from './CompanySchema';
import { Batch } from './BatchSchema';

// Document interface
export interface Medicine {
    medicineName: String;
    saltName: String;
    companyId: Company;
    gst: number;
    hsnCode: String;
    batchIds: Array<Batch>;
}


const medicineSchema = new Schema<Medicine>({
    medicineName:{
        type: String,
        required: true,
    },
    saltName:{
        type: String,
        required: true
    },
    companyId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Company'
    },
    hsnCode:String,
    gst: Number,
    batchIds: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Batch'
    }]
})

const MedicineModel = mongoose.model('Medicine', medicineSchema);

export default MedicineModel;


// While adding new medicine

/**  
Api Body for medicine
{
    medicineName: String.
    saltName: String,
    companyId: ObjectId, // Referenced field
    hsnCode: string,
    gst: string;
}   
*/