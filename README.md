



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://insatunisia.github.io/TP-ArchLog/img/eventCloud.png">
    <img src="https://insatunisia.github.io/TP-ArchLog/img/eventCloud.png" alt="Logo" width="400" height="200">
  </a>

  <h3 align="center">Loan Management Microservice</h3>

<!-- ABOUT THE APPLICATION -->
##  🔭 About The Project

This repository aims to showcase a microservice architecture design for a bank loan management module. The architecture is based on the master-worker pattern, with the ProcessService serving as the master that coordinates the Commercial Service, Risk Management Service, and Credit Service microservices. The focus of this implementation is to demonstrate the effectiveness of this architecture for handling loan management workflows, and thus the code does not include any business logic. The databases have been implemented as local files to keep the implementation simple and easy to understand. Overall, this repository provides an excellent resource for developers who want to learn how to implement microservice architectures in the context of loan management systems.
<p align="center" width="100%">
<img src="https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/hr.gif"/> 
</p>

<!--  🤔 Accessible Endpoints -->
##  🤔 Accessible Endpoints

* POST /add , create a new loan request

<h2> <img src="https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/codes.webp" width="50px">  Microservices </h2>

The loan management module is built using a microservice architecture based on the master-worker model. The master service is the Process Service, which orchestrates the workflow of the following services:

Commercial Service: Processes the loan application to check the eligibility of the borrower and the repayment terms and period, based on the borrower’s income and financial situation. This service establishes an initial scoring to assess the eligibility of the client to get the loan.

Risk Management Service: Analyzes the loan application to determine whether the borrower can afford the loan and whether there are any outstanding commitments with other banks. The service provides a final score that determines whether the loan application should be approved.

Credit Service: Establishes the final step by elaborating the credit agreement to be signed and the amortization table. Both documents can be later viewed/downloaded by the client.

The module uses a local database file and the services run on different ports.

###  🎨  Tesseract OCR 

Tesseract. js is an open source text recognization engine that allows us to extract text from an image. Another word for this technology is Optical Character Recognition, or OCR. OCRs work by scanning images and extracting their text as a machine-readable file.

https://www.npmjs.com/package/tesseract.js/v/2.1.1

### 🚧 Ports 

The loan management module runs on the following ports: <br/>
3000: Process Service <br/>
3001: Commercial Service <br/>
3002: Risk Management Service <br/>
3003: Credit Service <br/>

### <img src = "https://github.com/Harpia-Vieillot/Harpia-Vieillot/blob/main/resources/analytics.webp" width="7%"> Local Database
The loan management module uses a local database file to store relevant information and keep track of loan applications and their statuses.
<!--  🌱 USAGE -->
## 🌱 Usage
To use this module, you'll need to have Node.js and npm installed on your computer. Once you have these installed, you can install the module by running the following command: <br/>
-npm install <br/>
-npm start

<!-- ⚡ Architecture-->
## ⚡ Architecture 
<p align="center">
    <img src="https://user-images.githubusercontent.com/70342285/236192248-683139d2-874c-45e0-831a-392c0358e3c1.png" alt="architecture">
</p>
<!--  😄 Demo-->
## 😄 Demo 
<p align="center">

[demo.webm](https://user-images.githubusercontent.com/79151541/236579472-0a082155-1244-47ea-bae7-fc267fe851bb.webm)
</p>



