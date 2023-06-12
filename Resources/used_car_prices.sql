USE used_car_prices;

DROP TABLE used_car_prices;

CREATE TABLE used_car_prices (
  region VARCHAR(255),
  price INT,
  manufacturer VARCHAR(255),
  model VARCHAR(255),
  `condition` VARCHAR(255),
  cylinders VARCHAR(255),
  fuel VARCHAR(255),
  odometer INT,
  title_status VARCHAR(255),
  transmission VARCHAR(255),
  drive VARCHAR(255),
  type VARCHAR(255),
  paint_color VARCHAR(255),
  state VARCHAR(255),
  car_age INT
);

LOAD DATA INFILE "C:\Users\gusme\iCloudDrive\Documents\Data Analystics\UOfT - Data Analytics\Projects\project4-group2\Resources\final_car_sales.csv"
INTO TABLE used_car_prices
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select count(model) FROM used_car_prices;

DELETE FROM used_car_prices
WHERE model IN ('others', '1500', '2500', '3500');

SELECT * FROM used_car_prices;