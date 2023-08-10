import dotenv from 'dotenv';
dotenv.config()

export const MONGODB_URI  = process.env.DATABASE_URL || '';
export const DB_NAME = process.env.DB_NAME || '';

export const FRONTEND_LINK= process.env.FRONTEND_LINK || 'http://localhost:3000';

export  const PORT = process.env.PORT || 5001;