# Hello World RESTful Web Service

Write a REST service in the **spring-learn** application created earlier, that returns the text `"Hello World!!"` using the Spring Web Framework.

---

## 📌 Details

- **Method:** GET  
- **URL:** `/hello`  
- **Controller:** `com.cognizant.spring-learn.controller.HelloController`  
- **Method Signature:** 
  ```java
  public String sayHello()

- **Method Implementation:**
  ```java
  return "Hello World!!"
  ```
- **Sample Request:**
  ```bash
  http://localhost:8083/hello
  ```
-**Sample Response:** `Hello World!!` 

IMPORTANT NOTE: Don't forget to include start and end log in the sayHello() method.

Try the URL http://localhost:8083/hello in both chrome browser and postman.

## SME to explain the following aspects:
•	In network tab of developer tools show the HTTP header details received
•	In postman click on "Headers" tab to view the HTTP header details received
 

