# Udacity Front End Nanodegree - Travel App Project

This **Travel App Project** source code is submitted to [Udacity](https://www.udacity.com/ "Udacity") for reviewing purposes.

## 1. Project Summary

This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS. You will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

## 2. Extra Project Efforts

* Added print results functionality
* Added refresh results functionality

## 3. API Credentials

* Create an user account at [Geonames](https://www.geonames.org/ "Geonames"), [WeatherBit](https://www.weatherbit.io/ "WeatherBit") and [Pixabay](https://pixabay.com/ "Pixabay") respectively to obtain the API keys.
* Create a file named `.env` with the following code and your API credentials.
```
GEONAMES_USER=your Geonames username
WEATHERBIT_KEY=your WeatherBit API key
PIXABAY_KEY=your Pixabay API key

## 4. User Interaction
The user accesses the site and is presented with a simple form. The form has two input fields, one to enter City name and the other to capture the departure date. After the user enters required data and clicks submit, they receive an image of the city as well as the current plus how many days until their departure date. 

## 5. Show content offline
The application uses service workers to show the content when offline.

## 6. Licence

No licence necessary. 
```