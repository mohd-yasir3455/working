const mongoose = require('mongoose');

// MongoDB URI pointing to the 'econest' database
const mongoURI = 'mongodb://127.0.0.1:27017/admin'; 

// Function to connect to MongoDB and fetch data
const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(mongoURI, {
    
    });
    console.log('DB is connected');

    // Get the collection 'rooms'
    const collection = mongoose.connection.db.collection('user_data');
  
    // Fetch all documents from the collection
    const data = await collection.find({}).toArray();
    console.log('Fetched data:', data);
    
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

// Export the function
module.exports = connectToMongoDB;
