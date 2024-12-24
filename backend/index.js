const {connectToMongoDB} = require('./db'); // Adjust the path if necessary
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${5000}`);
});


connectToMongoDB();  // Ensure this line runs after the import

app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
