import mongoose from "mongoose";
import colors from 'colors'
import { exit } from 'node:process';

export const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.rainbow(`MongoDB conecatado en: ${url}`));
        
        
    } catch (error) {
        //console.error(error.message);
        console.log(colors.red.bold('Error al conecatar a MongoDB'));
        
        exit(1)
    }
}