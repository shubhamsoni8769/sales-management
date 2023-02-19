import mongoose, { Model, Schema, Types } from 'mongoose';

// Document interface
interface HsnCode {
    code: string;
    gst: Types.Array<number>;
}
 

const hsnCodeSchema = new Schema<HsnCode, Model<HsnCode>>({
    code: {
        type: 'string',
        unique: true,
        required: true
    },
    gst:{
        required: true,
        type: [Number]
    }
});


const HsnModel = mongoose.model("HsnCode",hsnCodeSchema );

export default HsnModel;


