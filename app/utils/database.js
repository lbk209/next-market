import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://leebaekku209_db_user:jTZ5awP4f1DYZoe8@cluster0.qzmzl3z.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: MongoDB connected");
    } catch {
        console.error("Error: MongoDB connection failed");
        throw new Error();
    }
}

export default connectDB;
