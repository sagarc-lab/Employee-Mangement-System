# Employee Management System

A student lab project with **Angular frontend**, **Spring Boot REST API**, and **MySQL** database.

## Features
- List employees
- Add an employee
- Edit an employee
- Delete an employee
- Basic form validation and API error messages
- REST API endpoints under `/api/employees`

## Requirements
- Java 17+
- Maven 3.8+
- Node.js 20+ and npm
- Angular CLI 19 (`npm install -g @angular/cli@19`)
- MySQL 8+

## 1. Create the MySQL database
Open MySQL Workbench or the MySQL terminal and run:

```sql
CREATE DATABASE employee_management;
```

The backend can create the `employees` table automatically through JPA (`ddl-auto=update`). The `database/schema.sql` file is also provided for reference.

## 2. Configure database credentials
Edit `backend/src/main/resources/application.properties` and set your local MySQL username/password. The defaults are `root` and `change_me`; change them before running.

## 3. Run the Spring Boot backend
From the `backend` folder:

```bash
mvn spring-boot:run
```

Backend base URL: `http://localhost:8080`  
Health check: `http://localhost:8080/api/employees`

## 4. Run the Angular frontend
From the `frontend` folder:

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/employees` | List employees |
| GET | `/api/employees/{id}` | Get one employee |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

Example JSON body:
```json
{
  "firstName": "Asha",
  "lastName": "Rao",
  "email": "asha.rao@example.com",
  "department": "Engineering",
  "jobTitle": "Developer",
  "salary": 55000.00
}
```

## Data model
`Employee` fields: `id` (primary key), `firstName`, `lastName`, `email` (unique), `department`, `jobTitle`, `salary`.

## Test checklist
- Create an employee with valid values.
- Confirm it appears in the list.
- Edit the department or job title and save.
- Delete the record and confirm it disappears.
- Submit missing fields or an invalid email and confirm validation errors.

## Troubleshooting
- If MySQL connection fails, check that MySQL is running and credentials/database name are correct.
- If port 8080 or 4200 is already in use, stop the other app or change the port.
- If Maven reports dependency download errors, check your internet connection.
- This is a lab starter project. Add authentication, role-based access, pagination, and stronger production configuration before real deployment.
