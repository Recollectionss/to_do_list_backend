import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/to-do-list-db');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

export default connectToDB;