# ServiceBookingSystem

This is a a project that i've build following the Code Elevate video. In this System, you can signup and/or login as Client or Company. Based on your roles 
you can access different features: 

Company:  Post ads, view ads, edit ads, delete ads, approve the hire;
Client:   View ads, hire ads, view hired ads;

## Technologies Used

**Frontend**:
  - <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" width="50" /> <img src="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/logo.svg" width="50" /> <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="50" />

       - Angular 16, NG Zorro, Typscript;
    
**Backend**:
  - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Framework Logo" width="50" />

       - Java Spring;
  
**Data Base**:
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" width="50" />
   - Mysql;

## Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js
- Angular 16
- Java Spring 3.0.5
- JDK 17
- Mysql server service

## Installation

Follow the steps below to download and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/CrFull/ServiceBookingSystem
```
### 2. Install Dependencies
Frontend:
 1. Go to frontend:
```bash
npm install -g @angular/cli@16
cd Angular-Frontend
```
 2. Install the dependencies:
```bash
npm install
```
Backend:
 1. Mysql:
   Install the Mysql Installer https://dev.mysql.com/downloads/installer/
   Install Mysql Server and Mysql Worbench
    
 2. Java Spring:
   Install the JDK 17: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
   An IDE for opening the Java Spring File and build the project(maven). Suggestion: Intelij https://www.jetbrains.com/pt-br/idea/
   Make sure to point the right JDK to build the project. On InteliJ: File>Project Structure> select the JDK 17 path.

### 3. Run the Project
Backend:
  Build the project on ServiceBookingSystemApplication main class.
  Make sure mysql server is running(mysqld on Task Manager)
Frontend:
  1. Go to frontend:
```bash
cd Angular-Frontend
```
  2. Start the application:
```bash
npm start
```
### 5. Contributions
Contributions are welcome! Feel free to open issues or pull requests.


### 6. Lincese 
This project is licensed under the Code Elevate License.



