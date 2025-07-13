# REST - Get Country Based on Country Code

## Objective
Write a REST service that returns a specific country based on the country code.  
The country code should be case insensitive.

---

## Endpoint Details

- **Controller:** `com.cognizant.spring-learn.controller.CountryController`
- **Method Annotation:** `@GetMapping("/countries/{code}")`
- **Method Name:** `getCountry(String code)`
- **Method Implementation:** Invokes `countryService.getCountry(code)`

- **Service Method:** `com.cognizant.spring-learn.service.CountryService.getCountry(String code)`

---

## Service Method Implementation Steps

- Get the country code from the path using `@PathVariable`.
- Load the list of countries from `country.xml`.
- Iterate through the list of countries.
- Perform a **case-insensitive comparison** of the country code.
- Return the matching `Country` object.

✅ Alternatively, a **lambda expression** can be used to filter the country list.

---

## Sample Request
GET http://localhost:8083/countries/in

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
