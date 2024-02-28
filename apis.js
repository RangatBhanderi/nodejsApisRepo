const express = require('express');
const app = express();
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
// http://localhost:5000/add?num1=5&num2=100
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});