import mongoose, { ObjectId, Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from './CompanySchema';
import { HsnCode } from './HsnCodeSchema';

// Document interface
export interface Medicine {
    medicineName: String;
    saltName: String;
    companyId: Company;
    gst: number;
    hsnCode: String;
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
    gst: Number
})

const MedicineModel = mongoose.model('Medicine', medicineSchema);

export default MedicineModel;

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