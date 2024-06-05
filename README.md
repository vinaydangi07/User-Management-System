# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Features


User List: Display a list of users with their names, emails, and roles. Allows sorting by name and email, and implements pagination with 10 users per page.
Add User: Create a form to add a new user with fields for name, email, and role. Validates email format and displays appropriate error messages.
Edit User: Allows users to edit existing user information. Validates the email address and displays appropriate error messages.
Delete User: Implements a confirmation dialog before deleting a user.
Role Management: Allows users to assign roles (e.g., Admin, User) to other users.
Search: Implements a search functionality to filter users by name or email.



 ## Data Persistence
For data persistence, this application uses JSON Server. JSON Server is a full fake REST API that allows you to create a CRUD server with zero coding. It provides endpoints for all CRUD operations and stores data in a JSON file. In this application, JSON Server is used to store user data, ensuring that the data remains persistent even after the application is closed.


## Technologies Used

Angular 14
Angular Material
JSON Server