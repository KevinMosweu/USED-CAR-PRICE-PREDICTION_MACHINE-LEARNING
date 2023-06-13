# Project4-Group2

![image](https://github.com/gusmendesbh/project4-group2/assets/94866814/92356039-e985-4d4d-8b48-19effbb99f0d)

# Demystifying Machine Learning - Used Cars Prices
Dashboard: https://public.tableau.com/app/profile/gustavo.mendes1926/viz/Group2-Project4/UsedCarsPrices-Story

## 01 - The Problem:

The goal of this project is to develop a machine learning model that can accurately analyze the prices of used vehicles listed on Craigslist, using the provided scraped data. By leveraging the vast collection of used vehicle entries within the United States, we aim to create a predictive model that will assist both sellers and buyers in making informed decisions regarding vehicle pricing.

### Goals:

- Develop a robust dataset: Preprocess and clean the scraped data, ensuring its quality and reliability for training the machine learning model.
- Feature engineering: Select relevant features from the dataset and engineer additional features that can enhance the predictive power of the model.
- Model training: Utilize machine learning algorithms to train a predictive model that can accurately estimate the prices of used vehicles based on various factors such as condition, manufacturer, location, and other relevant categories.
- Model evaluation: Assess the performance of the trained model using appropriate evaluation metrics and compare it with baseline models and industry standards.

#### Expected Outcomes

- A machine learning model capable of accurately predicting the prices of used vehicles listed on Craigslist.
- An interactive application that enables users to estimate vehicle prices based on their input parameters.
- Insights into the factors that significantly affect vehicle prices and their relative importance.

## 02 - Using ML:

### Preparing The Data

- Clean the scraped data by removing duplicates, handling missing values, and addressing any inconsistencies in the dataset.
- Perform exploratory data analysis to gain insights into the distribution of features, identify outliers, and understand potential correlations.
- Select relevant features from the dataset, such as price, condition, manufacturer, state, and other categories that influence vehicle prices.
- Engineer additional features, such as age of the vehicle and location-specific factors, which can enhance the predictive power of the model.

### Data Model Optimization

- Split the preprocessed dataset into training and testing sets.
- Apply appropriate machine learning algorithms, such as linear, lasso, ridge and elastic net regression, random forests or decision trees, to train a predictive model on the training set.
- Evaluate the trained model using relevant evaluation metrics, such as mean absolute error (MAE), mean squared error (MSE), and R-squared.
- Compare the performance of the model with baseline models and industry standards to gauge its effectiveness.

### Data Model Visualization - Dashboard
- Export data using MySQL to RDS
- Build an interactive dashboard that allows users to input vehicle information (e.g., condition, manufacturer, mileage, location) and receive predicted prices based on the trained model.
- Deploy the application on a web server to make it accessible to users.

## 03 - Tools Used:

- Google Colaboratory
- Access to the scraped data from Craigslist containing used vehicle listings within the United States, obtained throught Kaggle: https://www.kaggle.com/datasets/austinreese/craigslist-carstrucks-data
- AWS Cloud Services:
  - S3 for initial data storage
  - RDS for database storage
- EDA, Data Cleaning, and Machine learning libraries and frameworks:
  - Python
    - PySpark for Big Data loading and handling
    - Pandas
    - Numpy
    - Matplotlib Pyplot
    - Seaborn
    - Scikit-Learn - sklearn
- MySQL for database creation, export to RDS and connection with visualization software.
- Tableu for building the interactive dashboard from MySQL database.

## 04 - Results

These are the results for the performance of each model tried:

![Screenshot 2023-06-13 012733](https://github.com/gusmendesbh/project4-group2/assets/119974799/467b8529-21f9-44d7-a806-2c9cc7c9acfd)

The Random Forest Regressor performed the best with the highest R-squared value and lowest Root Mean Squared Error.

Different parameter values for the number of estimators(150, 300) and maximum number of features(0.3, auto, sqrt, log2) were tried. The best parameters were 300 estimators and 0.3 for max number of features, but only marginally:

![image](https://github.com/gusmendesbh/project4-group2/assets/119974799/5d61a331-4874-479e-9eb2-f227c4134749)

The following are the top 15 most important features in the model:

![image](https://github.com/gusmendesbh/project4-group2/assets/119974799/3f1e6612-0019-47d3-9ad6-1a92991eda0a)

From the graph the 5 most important columns seem to be car age, odometer, drive, cylinders and fuel.

Statistical Tests for the most important columns

- Linear regression done for price against the car age revealed an r value of -0.60 and p value of 0.0.
- Linear regression done for price against the odometer revealed an r value of -0.58 and p value of 0.0.
- P-values for one sample T-tests done against the average price for population and average price for each of the unique values of drive:
  - Rear wheel: 1.6164107024406855e-288
  - 4 wheel: 0.0
  - Front wheel: 0.0
- P-values for one sample T-tests done against the average price for population and average price for each of the unique values for number of engine cylinders:
  - 3 Cylinders: 4.430166780316896e-29
  - 4 Cylinders: 0.0
  - 5 Cylinders: 0.0
  - 6 Cylinders: 2.2846504557938425e-10
  - 8 Cylinders: 0.0
  - 10 Cylinders: 1.741646801228202e-07
  - 12 Cylinders: 0.14475016469686203
- P-values for one sample T-tests done against the average price for population and average price for each of the unique values for different fuel types:
  - Gas: 0.0
  - Diesel: 0.0
  - Hybrid: 5.0933510161389406e-121
  - Electric: 3.203379039629265e-66
 
 These p-values are all less than 0.05, indicating that all these variations in these columns have a statstically significant effect on the listed price of a car.

## 05- The Team:

- Fahmida Billa
- Gustavo Mendes
- Kevin Mosweu
- Shankar Mohanathas
