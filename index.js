
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.get('/api/status', (req,res)=>res.json({ok:true}));

app.listen(process.env.PORT || 3001, ()=>console.log("Backend running"));
