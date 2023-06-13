# Project4-Group2

![image](https://github.com/gusmendesbh/project4-group2/assets/94866814/92356039-e985-4d4d-8b48-19effbb99f0d)


# Demystifying Machine Learning - Used Cars Prices

## 01 - The Problem:

The goal of this project is to develop a machine learning model that can accurately predict the prices of used vehicles listed on Craigslist, using the provided scraped data. By leveraging the vast collection of used vehicle entries within the United States, we aim to create a predictive model that will assist both sellers and buyers in making informed decisions regarding vehicle pricing.

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

## 05- The Team:

- Fahmida Billa
- Gustavo Mendes
- Kevin Mosweu
- Shankar Mohanathas
