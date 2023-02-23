import mongoose, { ObjectId, Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from './CompanySchema';
import { HsnCode } from './HsnCodeSchema';

// Document interface
export interface Medicine {
    medicineName: String;
    saltName: String;
    companyId: Company;
    hsnCode: HsnCode;
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
    hsnCode: {
        type: mongoose.Schema.Types.ObjectId, ref:'HsnCode'
    }  
})


const MedicineModel = mongoose.model('Medicine', medicineSchema);

export default MedicineModel;