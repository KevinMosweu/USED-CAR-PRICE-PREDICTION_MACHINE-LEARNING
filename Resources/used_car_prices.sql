USE used_car_prices;

CREATE TABLE used_car_prices (
  region VARCHAR(255),
  price INT,
  year INT,
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
  state VARCHAR(255)
);

LOAD DATA INFILE "C:\Temp\df_clean.csv"
INTO TABLE used_car_prices
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select count(model) FROM used_car_prices;

SELECT * FROM used_car_prices;