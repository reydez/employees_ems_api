# employees_ems_api
EMS App:
1. Cron job which constantly pull the employee data and store
2. Admin to map the roles in ems app
------------------------------------------------------------------------------------------
***Employees MicroService (NestJS):***
Read all the employees with in the AD (Active Directory)
Has to persist the employees along with timestamp
expose below two apis
------------------------------------------------------------------------------------------
GET /roles - Return the unique list of roles
GET /Employees - Read all the employees from DB
GET /Employees/delta?date=3-24-2023T10:30:53 - Read the employees from DB based on the date passed in the api
------------------------------------------------------------------------------------------
Onblick API -
