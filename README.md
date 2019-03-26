## Expense tracking application

ExpenseTracker
http://3.90.93.29:8080/ExpenseTrackerREST


## Overview
Evented
During this 7 day spring we decided to build a website. This website lets you create or join events in your area which other people have the ability to join. Have you ever failed trying to find a friend or family member to join you at an event? Worry not we have you covered, our page allows you to find like minded individuals who will join you for an aweasome night out .

The process to register, create, login/logout, join ,create or leave events, are all straight foward and simple. Admins have the higher privalages and can delete or edit your event if you don't follow the guideslines for posting. All crud funcationallity is present in this project.

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
    
## REST API description
You can test all point with postmant using the link below: 
https://www.getpostman.com/collections/4295c910c04d0d890b50

### Expected Routes

| Return Type    | Route                 | Functionality            |
|----------------|-----------------------|--------------------------|
| `List<Category>` |`GET api/categories`| Gets all categories for an expense   |
| `List<Expense>`       |`GET api/expenses`| Gets all expenses |
| `Boolean`       |`DELETE api/expenses/{id}`| Deletes an expense by id|
| `List<Expense>`    |`GET api/expenses/{id}` | Gets expense by id|
| `Expense `   |`POST api/expenses` | Creates new expense|

