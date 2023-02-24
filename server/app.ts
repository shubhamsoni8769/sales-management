import express from 'express';
import morgan from 'morgan';
import { addHsnCode, getHsnCode } from './controllers/hsnController.js';
import { addCompany, getAllCompany } from './controllers/companyController.js';
import { addMedicine, getAllMedicine, getMedicineByName } from './controllers/medicineController.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { hsnCodeRouter } from './routes/hsnRoutes.js';
import { companyRouter } from './routes/companyRoutes.js';
import { medicineRouter } from './routes/medicineRoutes.js';
import { BadRequestError } from './errors/ApiError.js';
import { NotFoundError } from './errors/NotFoundError.js';


export const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));


//HSN Code Routes
app.use('/api',hsnCodeRouter);

// Company Routes
app.use('/api', companyRouter);

// Medicine

app.use('/api', medicineRouter);


app.all('*', (_, __, next) => {
  next(new NotFoundError("This Endpoint doesn't exist", 404));
});

app.use(errorMiddleware);
