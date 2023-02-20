import mongoose, { Schema} from 'mongoose';

// Document interface
export interface Company {
    name: String;
    hsnCode: string;
}


const companySchema = new Schema<Company>({
    name:{
        type: String,
        required: true,
    },
    hsnCode:[
       { type: mongoose.Schema.Types.ObjectId,
        ref: 'HsnCode'}
    ],
})


const companyModel = mongoose.model('Company', companySchema);

export default companyModel;