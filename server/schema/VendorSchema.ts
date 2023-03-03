import mongoose, { ObjectId, Schema, SchemaTypes, Types } from 'mongoose';
import { Company } from './CompanySchema';
import { HsnCode } from './HsnCodeSchema';

// Document interface
export interface Vendor {
    vendorName?: String;
    vendorOrganisationName: String;
    mobile: string;
    email: string;
    gst: string;
    pincode: Number;
    address: string; //TOOD: add tables for state and city
}


const vendorSchema = new Schema<Vendor>({
    vendorName:{
        type: String,
    },
    vendorOrganisationName: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    gst: {
        type: String
    },
    pincode: {
        type: Number,
        minlength:6,
        maxlength:6
    },
    address: {
        type: String
    },
})


const VendorModel = mongoose.model('Vendor', vendorSchema);

export default VendorModel;

/**  
Api Body for vendorSchema
{
    vendorName?: String;
    vendorOrganisationName: String;
    mobile: string;
    email: string;
    gst: string;
    pincode: Number;
    address: string; //TOOD: add tables for state and city
} 
*/