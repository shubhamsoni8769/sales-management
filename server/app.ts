import express from 'express';
import morgan from 'morgan';
import { addHsnCode, getHsnCode } from './controllers/hsnController.js';
import { addCompany, getAllCompany } from './controllers/companyController.js';
import { addMedicine, getAllMedicine, getMedicineByName } from './controllers/medicineController.js';



export const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));


// TODO: refactor routes in separate folders
app.get('/api/hsn',(req, res) => {
    getHsnCode(req,res);
})

app.post('/api/hsn',(req, res) => {
    addHsnCode(req,res);
})

// Company
app.get('/api/company', getAllCompany);

app.post('/api/company', addCompany);

// Medicine
app.get('/api/medicine', getAllMedicine);
app.get('/api/medicineByName', getMedicineByName);
app.post('/api/medicine', addMedicine);


// app.all('*', (_, __, next) => {
//   next(new ApiError("This Endpoint doesn't exist", 404));
// });

// app.use(errorMiddleware);
