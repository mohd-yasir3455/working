const mongoose = require('mongoose');

// MongoDB URI
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/econest';

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB is connected');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

// Fetch collection data
const fetchCollectionData = async (collectionName) => {
  try {
    const collection = mongoose.connection.db.collection(collectionName);
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    console.error(`Error fetching data from ${collectionName}:`, err);
  }
};

module.exports = { connectToMongoDB, fetchCollectionData };
