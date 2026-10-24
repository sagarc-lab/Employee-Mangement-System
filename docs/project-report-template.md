# EMPLOYEE MANAGEMENT SYSTEM
## Project Report

**Submitted by:** Sagar  
**Department:** Computer Science and Engineering (Data Science)  
**College:** BMS College of Engineering, Bengaluru, Karnataka  

**USN / Roll Number:** 1BM25CD087 
**Academic Year:** 2026-27
**Submission Date:** 24-10-2026

---

## 1. Abstract

The Employee Management System is a web-based application developed to manage employee information in an organized and efficient manner. The system allows users to view employee records and provides functionality for employee management, including adding, updating, and deleting employee information.

The frontend is developed using Angular, the backend is developed using Spring Boot, and MySQL is used as the database. The frontend communicates with the backend through REST APIs, while the backend handles application logic and database operations.

The main objective of this project is to demonstrate the development of a full-stack web application using modern software development technologies.

## 2. Introduction

Managing employee information manually can be time-consuming and may lead to data duplication, errors, and difficulties in retrieving records. A computerized employee management system provides a centralized way to store, display, and maintain employee details.

This project implements a web application through which employee information such as name, email, department, job title, and salary can be managed. The application follows a frontend-backend-database architecture.

## 3. Problem Statement

Traditional methods of maintaining employee records may require manual data entry and searching through multiple records. These methods can make updating information difficult and reduce the efficiency of employee data management.

The proposed Employee Management System aims to provide a structured digital solution for maintaining employee records and performing common employee management operations.

## 4. Objectives

The main objectives of the project are:

1. To develop a web-based employee management application.
2. To provide a user interface for displaying employee records.
3. To support adding new employee details.
4. To provide functionality for updating existing employee information.
5. To provide functionality for deleting employee records.
6. To store employee information in a MySQL database.
7. To connect the Angular frontend with a Spring Boot REST API.
8. To understand full-stack application development and database integration.

## 5. Technologies Used

| Technology | Purpose |
|---|---|
| Angular | Frontend user interface |
| TypeScript | Frontend application logic |
| HTML | Structure of web pages |
| CSS | Styling and layout |
| Spring Boot | Backend application development |
| Java | Backend programming language |
| REST API | Communication between frontend and backend |
| MySQL | Database management |
| Maven | Backend dependency management and build |
| Node.js and npm | Frontend development tools |
| Visual Studio Code | Source code editing |
| MySQL Workbench | Database inspection and SQL execution |

## 6. System Requirements

### Hardware Requirements

- Computer or laptop
- Keyboard and mouse
- Sufficient memory and storage to run the development tools

### Software Requirements

- Windows operating system
- Java Development Kit (JDK)
- Node.js and npm
- Angular CLI
- Spring Boot and Maven
- MySQL Server
- Visual Studio Code
- Google Chrome or another modern web browser

## 7. System Architecture

The application follows a three-layer architecture.

### 7.1 Presentation Layer

The presentation layer is developed using Angular. It provides the interface for viewing employee records and interacting with employee management features.

### 7.2 Application Layer

The application layer is developed using Spring Boot. It receives HTTP requests from the frontend, processes employee-related operations, and communicates with the database.

### 7.3 Database Layer

MySQL stores employee information, including employee identifiers, names, email addresses, departments, job titles, and salaries.

### Application Flow

User → Angular Frontend → Spring Boot REST API → MySQL Database

Responses are returned through the backend and displayed in the Angular interface.

## 8. Modules

### 8.1 Employee Listing Module

Displays employee records in a table containing the employee's name, email, department, job title, salary, and available actions.

### 8.2 Add Employee Module

Allows users to enter employee details and submit them to the backend for storage.

### 8.3 Update Employee Module

Provides an edit option for modifying the information of an existing employee.

### 8.4 Delete Employee Module

Provides a delete option for removing an employee record from the system.

### 8.5 Database Module

Maintains employee records in MySQL and supports database operations performed by the backend.

## 9. Database Design

The database contains an employee table. The exact column names should match the entity and database schema implemented in the project.

| Field | Description |
|---|---|
| ID | Unique employee identifier |
| First Name | Employee's first name |
| Last Name | Employee's last name |
| Email | Employee email address |
| Department | Employee's department |
| Job Title | Employee's job designation |
| Salary | Employee salary |

The employee identifier uniquely identifies each record. Email addresses should be unique if this constraint is implemented in the database.

## 10. Implementation

### Frontend Implementation

Angular is used to build the employee management interface. TypeScript handles application logic, and HTML and CSS define the structure and appearance of the page.

The frontend uses an employee service to communicate with the backend through HTTP requests.

### Backend Implementation

Spring Boot provides the REST API used to manage employee records. The backend processes incoming requests and interacts with MySQL through the application's persistence layer.

### Database Implementation

MySQL stores the employee information. The backend connects to the database using the configured datasource settings.

### Running the Application

The backend is configured to run at:

`http://localhost:8080`

The Angular development server is configured to run at:

`http://localhost:4200`

These addresses are for local development on the computer running the application.

## 11. Testing

Testing is necessary to verify that the application's features work as expected. Record the actual outcome of each test below.

| Test Case | Expected Result | Actual Result / Status |
|---|---|---|
| Launch the frontend | Application page loads correctly | [Record actual result] |
| Connect to the backend | Backend starts without errors | [Record actual result] |
| Display employee records | Employee records appear in the table | [Record actual result] |
| Add an employee | New employee is saved and displayed | [Test and record result] |
| Edit an employee | Updated information is displayed and saved | [Test and record result] |
| Delete an employee | Selected employee is removed | [Test and record result] |
| Verify database records | Database contains the expected employee records | [Test and record result] |

**Testing note:** A screenshot of the employee list shows Rahul Sharma, Priya Patel, and Arjun Kumar, along with Edit and Delete buttons. This establishes that those records were displayed in the interface at the time of the screenshot. It does not by itself confirm that adding, editing, deleting, or database persistence has been tested successfully.

## 12. Results and Screenshots

The application interface displays employee information in a tabular format. The visible fields include name, email, department, job title, and salary. Action buttons are provided for editing and deleting records.

Insert screenshots of your actual application in this section.

### Screenshot 1: Employee List

[Insert screenshot of the employee list page]

### Screenshot 2: Add Employee

[Insert screenshot of the add employee form and its result]

### Screenshot 3: Update Employee

[Insert screenshot showing the updated employee information]

### Screenshot 4: Delete Employee

[Insert screenshot showing the employee list after deletion]

### Screenshot 5: Database Records

[Insert screenshot from MySQL Workbench showing the employee table and records]

Only include screenshots of operations you have actually performed.

## 13. Advantages

- Centralized storage of employee information.
- Easy viewing of employee records.
- Convenient management of employee details.
- Clear separation between frontend, backend, and database.
- Practical demonstration of REST API integration.
- Use of widely adopted web development technologies.

## 14. Limitations

- The application currently runs in a local development environment.
- Authentication and role-based access control should be added if the system is to be used in a real organization.
- Input validation and error handling should be tested thoroughly.
- Production deployment, backups, and security configurations may require further development.

## 15. Future Enhancements

The application can be improved by adding:

1. User authentication and authorization.
2. Search, sorting, and filtering of employee records.
3. Pagination for large employee lists.
4. Employee profile images and additional employee details.
5. Export functionality for reports.
6. Improved form validation and error messages.
7. Automated unit and integration tests.
8. Deployment to a production server.

## 16. Conclusion

The Employee Management System demonstrates the development of a full-stack web application using Angular, Spring Boot, and MySQL. It provides an interface for displaying employee records and includes controls for employee management operations.

The project helps demonstrate frontend development, REST API communication, backend application logic, and relational database integration. Further improvements in security, validation, testing, and deployment can make the application more suitable for practical organizational use.

## 17. References

1. Angular Documentation — https://angular.dev/
2. Spring Boot Documentation — https://docs.spring.io/spring-boot/
3. MySQL Documentation — https://dev.mysql.com/doc/
4. TypeScript Documentation — https://www.typescriptlang.org/docs/
5. Maven Documentation — https://maven.apache.org/guides/

---

**Submitted by:** Sagar  
**Department:** Computer Science and Engineering (Data Science)  
**BMS College of Engineering, Bengaluru**

