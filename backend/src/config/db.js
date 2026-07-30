import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connetionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}`
        );
        console.log(
            `\n MongoDB connected !! `
        );
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;