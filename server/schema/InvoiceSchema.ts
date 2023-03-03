import mongoose, { ObjectId, Schema} from 'mongoose';

// Document interface
export interface Invoice {
   vendorId: ObjectId; //
}


const invoiceSchema = new Schema<Invoice>({
    
})


const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

export default InvoiceModel;