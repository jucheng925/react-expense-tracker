# React Project - Expense Tracker

## About this Project
This project was built using React. It displays and summarizes personal expenses. The data is fetched from an db.json server. You are able to see the expenses for a particular month in more details. There is also a feature where you are able to toggle between deciding whether this expense is considered to be necessary or not. There is also a form component, where you can add a new expense.

## Demo
![Demo](giphy.gif)

## Getting Started
The backend of this project is a db.json file. So you will need two terminals, one to watch the server and the other to run the application.

First the json-server need to be run: 

```json-server --watch db.json```

Using another terminal, all the dependencies need to be installed: 

```npm install```

Once that is done, we are ready to start:

```npm start```

## Components Hierachy
```
App
|-- NavBar
|-- Home
|   |__ Summary
|-- ExpenseForm
|__ MonthsList 
    |__ Month
        |__ Expense
```

## Future Plans
I have ideas on how to expand this project, which I would like to come back and work on.

Currently months are being derived from the expenses data, but I would like to figure out a way where months can be derived based on the current time. That is, if the current month is September 2023 - the addExpense form should have the option for September 2023 even when there is no expense for that month in the database.

Eventually, I would like to add user profiles functionality for the app, that is including a log in/log out ability to keep track of a user's expenses. 