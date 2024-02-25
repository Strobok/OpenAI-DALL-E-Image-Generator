import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./mongoDB/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

/* CONFIGURATIONS */
dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

/* ROUTES */
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {;
    res.send('Hello from DALL-E')
      
  });


  /* SERVER SETUP */
  const startServer = async () => {

    try{
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
      
    } 

  
  startServer();