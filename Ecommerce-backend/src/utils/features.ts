import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const connectDB = async () => {
    try {
        const mongoDB = await mongoose.connect(process.env.MONGO_URL as string, {
            dbName: "Ecommerce-2"
        });
        console.log(`DB connect to ${mongoDB.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

