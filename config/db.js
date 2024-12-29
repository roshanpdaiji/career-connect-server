import mongoose from 'mongoose'

//Function to connect to the MongoDb database

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/careerconnect`)
}

export default connectDB

