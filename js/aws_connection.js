const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'database-1.cezn2cxiwaqh.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'project4',
  database: 'used_car_prices',
});

connection.query('SELECT * FROM used_car_prices', (error, results) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  // console.log('Query results:', results);
  // Process the results and pass them to your dashboard visualization code
});




// Handle client-side request for data
app.get('/api/data', (req, res) => {
  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      res.status(500).send('Error connecting to the database');
      return;
    }

    // Execute your SQL query
    const query = 'SELECT price, year, manufacturer, model, condition, fuel, odometer, transmission, drive, state FROM your_table';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error executing query');
        return;
      }
      // console.log('Query results:', results);
      // Send the results back as a response
      res.json(results);
    });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});