# REST - Country Web Service

## Objective
Write a REST service that returns India country details in the earlier created Spring Learn application.

---

## Endpoint Details

- **URL:** `/country`
- **Controller:** `com.cognizant.spring-learn.controller.CountryController`
- **Method Annotation:** `@RequestMapping`
- **Method Name:** `getCountryIndia()`
- **Method Implementation:** Load India bean from Spring XML configuration and return.

---

## Sample Request
GET http://localhost:8083/country

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
