import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/to-do-list-db';
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

export default connectToDB;