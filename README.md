## Expense tracking application

### ExpenseTracker

http://3.90.93.29:8080/ExpenseTrackerREST


## Overview
ExpenseTracker - application which allows users to keep track of information over their expenses by creating, updating, deleting and getting information about it. 

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

## Technologies used
    [1]: SpringMVC                
    [2]: HTML            
    [3]: CSS
    [4]: JPA                
    [5]: MySQL            
    [6]: JSP
    [7]: CRUD
    [8]: JPA                
    [9]: Bootstrap            
    [10]:SpringBoot
    [11]:AWS
    [12]:J-Unit
    
