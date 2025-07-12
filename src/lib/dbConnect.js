import mongoose from "mongoose";

const connection = {}

export const dbConnect =  async() => {
    try {
        if(connection.isConnected){
            console.log("Database already connected")
            return
        }
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/skillnetix`)

        connection.isConnected = db.connection[0].readyState

        console.log("Database connected successfully")
        
    } catch (error) {
        console.error("Database Connection error")

        throw new Error("Failed to connect to the the database")
    }
}