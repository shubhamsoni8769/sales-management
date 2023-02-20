

import {config} from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app.js';


config(); // puts .env keys and values in process.env
const PORT = process.env.PORT || 5000;
const connectString = process.env.MONGODB_URI;



// 'mongodb+srv://test:test@dummycluster.bh0bnm6.mongodb.net/salesManagement';
mongoose.set('strictQuery', false);

mongoose.connect(connectString, (err) => {
  if (err) console.log({ connectionError: err });
  else
    {app.listen(PORT, () => {
      console.log(
        `Server is listening to requests at http://localhost:${PORT}`
      );
    });}
});


