function loadData() {
    return d3.csv('/api/data')
      .then(data => {
        // Convert the CSV data to JSON format
        const jsonData = data.map(d => {
          return {
              price: +d.price,
              year: +d.d.year,
              manufacturer: +d.manufacturer,
              model: +d.model,
              condition: +d.condition,
              fuel: +d.fuel,
              odometer: +d.odometer,
              transmission: +d.transmission,
              drive: +d.drive,
              state: +d.state,
          };
        });
        return jsonData;
      });
  }
  
  // Load the data and attach it to the window object
  loadData().then(data => {
    window.tornadoData = data;
  });
  