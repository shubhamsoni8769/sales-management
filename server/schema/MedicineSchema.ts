import mongoose, { Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from './CompanySchema';

// Document interface
export interface Medicine {
    name: String;
    saltName: String;
    companyName: Company;
    batchNbr: String;
}


const medicineSchema = new Schema<Medicine>({
    name:{
        type: String,
        required: true,
    },
    saltName:{
        type: String,
        required:true
    },
    companyName:{
        type: mongoose.Schema.Types.ObjectId, ref:'Com'
    },
    batchNbr: String
    
})


const medicineModel = mongoose.model('Medicine', medicineSchema);

export default medicineModel;