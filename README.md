# React Project - Expense Tracker

## About this Project



## Getting Started
The backend of this project is a db.json file. So will need two terminals, one to watch the server and the other to run the application.

First the json-server need to be run: 

`json-server --watch db.json`

Using another terminal, all the dependencies need to be installed: 

`npm install`

Once that is done, we are ready to start:

`npm start`

## Future Plans
I have ideas on how to expanding this project, which I will like to come back and work on.

Currently months are being derived from the expenses data, but I would like to figure out a way where months can be derived based on the current time. That is, if the current month is September 2023 - the addExpense form should have the option for September 2023 even when there is no expense for that month in the database.

Eventually, I would like to include user profile for the app. Including a log in/log out ability to keep track of a user's expenses. 