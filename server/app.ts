import express from 'express';
import morgan from 'morgan';
import { addHsnCode, getHsnCode } from './controllers/hsnController.js';



export const app = express();

app.use(express.json());
app.use(morgan('dev'));


// TODO: refactor routes in separate folders
app.get('/api/hsn',(req, res) => {
    getHsnCode(req,res);
})

app.post('/api/hsn',(req, res) => {
    addHsnCode(req,res);
})



// app.all('*', (_, __, next) => {
//   next(new ApiError("This Endpoint doesn't exist", 404));
// });

// app.use(errorMiddleware);
