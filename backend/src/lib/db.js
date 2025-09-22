import mangoose from 'mongoose';

export const connectDB = async (mongoURI) => {
  try {
    const conn = await mangoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // 1 stands for failure 0 stands for success
  } 
}