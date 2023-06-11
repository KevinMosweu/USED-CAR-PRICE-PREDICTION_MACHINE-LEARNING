d3.csv('../Resources/final_car_sales.csv')
      .then(importedData => {
        // Convert the CSV data to JSON format
        var data = importedData;
        
        data = data.slice(0, 10);
        let trace1 = {
            x: data.map(row => row.price),
            y: data.map(row => row.year),
            text: data.map(row => row.model),
            name: "Car Prices",
            type: "bar",
            orientation: "h"
            };

        let chartData = [trace1];

        let layout = {
        title: "Car Prices per Year",
        margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
        }
        };

        Plotly.newPlot("chart-container", chartData, layout)
    
        })


// Heatmap showing prices by state

// Car Age vs Avg Price / Interactive by model

// Dropdown by model - filterd by year



// 
