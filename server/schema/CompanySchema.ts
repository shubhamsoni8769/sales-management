import mongoose, { Schema} from 'mongoose';

// Document interface
export interface Company {
    name: String;
}


const companySchema = new Schema<Company>({
    name:{
        type: String,
        required: true,
        unique:true,
    },
})


const CompanyModel = mongoose.model('Company', companySchema);

export default CompanyModel;