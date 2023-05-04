



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://insatunisia.github.io/TP-ArchLog/img/eventCloud.png">
    <img src="https://insatunisia.github.io/TP-ArchLog/img/eventCloud.png" alt="Logo" width="400" height="200">
  </a>

  <h3 align="center">Loan Management Microservice</h3>

<!-- ABOUT THE APPLICATION -->
##  🔭 About The Project

This module automates the loan process for a banking application, including initial borrower eligibility assessment and risk analysis. The system notifies the client if their application has been approved and generates loan agreements and amortization tables for the client to view and download. The system also uses OCR capabilities to extract information from uploaded documents.
<p align="center" width="100%">
<img src="https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/hr.gif"/> 
</p>

<!--  🤔 Accessible endpoints -->
##  🤔 Accessible Endpoints

* 
* 
* 
* 
<h2> <img src="https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/codes.webp" width="50px">  Microservices </h2>

The loan management module is built using a microservice architecture based on the master-worker model. The master service is the Process Service, which orchestrates the workflow of the following services:

Commercial Service: Processes the loan application to check the eligibility of the borrower and the repayment terms and period, based on the borrower’s income and financial situation. This service establishes an initial scoring to assess the eligibility of the client to get the loan.

Risk Management Service: Analyzes the loan application to determine whether the borrower can afford the loan and whether there are any outstanding commitments with other banks. The service provides a final score that determines whether the loan application should be approved.

Credit Service: Establishes the final step by elaborating the credit agreement to be signed and the amortization table. Both documents can be later viewed/downloaded by the client.

The module uses a local database file and the services run on different ports.

### 🚧 Ports 

The loan management module runs on the following ports: <br/>
3000: Commercial Service <br/>
3001: Risk Management Service <br/>
3002: Credit Service <br/>

### <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Local Database
The loan management module uses a local database file to store relevant information and keep track of loan applications and their statuses.
<!--  🌱 USAGE -->
## 🌱 Usage
To use this module, you'll need to have Node.js and npm installed on your computer. Once you have these installed, you can install the module by running the following command: <br/>
-npm install <br/>
-npm start

<!-- ⚡ Architecture-->
## ⚡ Architecture 
![architecture](https://user-images.githubusercontent.com/70342285/236192248-683139d2-874c-45e0-831a-392c0358e3c1.png)

<!--  😄 Demo-->
## 😄 Demo 



