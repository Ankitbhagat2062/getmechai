import mongoose from 'mongoose';

let cachedConnection = null;

const connectDB = async () => {
  try {
    if (cachedConnection || mongoose.connection.readyState === 1) {
      return cachedConnection || mongoose.connection;
    }

    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('Missing MongoDB connection string. Set MONGODB_URI or MONGO_URI.');
    }

    const conn = await mongoose.connect(`${mongoUri}/getMeTea`);
    cachedConnection = conn.connection;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return cachedConnection;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
export default connectDB;
