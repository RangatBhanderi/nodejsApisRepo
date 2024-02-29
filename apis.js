const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const port = 5055;
var listOfData=[1,2,3,4,5,6,7,8,9,10];

app.get('/', (req, res) => {
    res.send('Hello, Worldzzztttpp!');
});

app.get('/listData', (req, res) => {
    res.send(listOfData);
});


app.get('/add', (req, res) => {
    // Extracting query parameters from the request
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    // Check if both query parameters are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    // Calculate the sum
    const sum = num1 + num2;

    // Send the sum as JSON response
    res.json({ sum });
});

const uri = 'mongodb+srv://rangatbhanderi27:dGj7UO8eHtHOX9qa@cluster0.vkt6ubw.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/mongodbdatas',async (req, res) => {
    try {
       await   client.connect();
        const db = client.db('sample_mflix'); // Replace <your_database_name> with your actual database name
        const collection = db.collection('users'); // Replace <your_collection_name> with your actual collection name

        // Query to retrieve data from the collection
        const result =await   collection.find({}).toArray();
        console.log(result);
        res.json(result);
        // Print the retrieved data
        // console.log('Retrieved data:', result);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
    }

});

async function connectToMongoDB() {
    try {
        await client.connect();
        const db = client.db('sample_mflix'); // Replace <your_database_name> with your actual database name
        const collection = db.collection('users'); // Replace <your_collection_name> with your actual collection name

        // Query to retrieve data from the collection
        const result = await collection.find({}).toArray();
           response.json(result);
        // Print the retrieved data
        // console.log('Retrieved data:', result);
        // console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
    }
}


// http://localhost:5000/add?num1=5&num2=100
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
