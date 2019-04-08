## Expense tracking application

### ExpenseTracker

http://3.90.93.29:8080/ExpenseTrackerREST


## Overview
ExpenseTracker - application which allows users to keep track of information over their expenses by creating, updating, deleting and getting information about it. 

## Front end - Angular Material UI 
This application uses Angular 7 and Angular Material UI libraries.

### RxJS is used for making http requests
The HttpClient from Angular makes use of rxjs with its http calls by returning an Observable<> object as a response. Observables wrap the standard XMLHttpRequests and allow us to manipulate the response in useful ways.

### Components are used:
    [1]: Side drawer
    [2]:Table 
    [3]: Pop Up Dialog
    [4]: Tools menu
    [5]: Forms
    [6]: DatePicker

## REST API description
You can test all point with POSTMAN using the link below: 
https://www.getpostman.com/collections/4295c910c04d0d890b50

## REST Routes

| Return Type    | Route                 | Functionality            |
|----------------|-----------------------|--------------------------|
| `List<Category>` |`GET api/categories`| Gets all categories for an expense   |
| `List<Expense>`       |`GET api/expenses`| Gets all expenses |
| `Boolean`       |`DELETE api/expenses/{id}`| Deletes an expense by id|
| `List<Expense>`    |`GET api/expenses/{id}` | Gets expense by id|
| `Expense `   |`POST api/expenses` | Creates new expense|
| `Expense `   |`PUT api/expenses/{id}` | Updates existing expense|

## Technologies used
    [1]: SpringMVC                
    [2]: HTML            
    [3]: CSS
    [4]: JPA                
    [5]: MySQL            
    [6]: JSP
    [7]: CRUD
    [8]: REST                
    [9]: Bootstrap            
    [10]:SpringBoot
    [11]:AWS
    [12]:J-Unit
    [13]:Angular- 7
    [14]:RXJs
    
