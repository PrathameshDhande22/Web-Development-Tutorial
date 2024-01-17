import mongoose from "mongoose";

const connectDB = async () => {
    const URI: string = String(process.env.MONGODB_URI);
    try {
        await mongoose.connect(URI);
        console.log("Connection with Database Successful.")
    } catch (error) {
        console.log("Connection with Database Failed.")
    }
}

export default connectDB;