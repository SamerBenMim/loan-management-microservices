// app.js file is the main file of the application. It is the first file that is executed when the application starts.
const express = require('express');

const {CommercialServiceController,uploadPdfController,CreditServiceController,RiskManagementController} = require('./controllers')
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({ storage: storage,dest: "uploads/images" })



// Routes
app.get('/', (req, res) => {
  res.send('server is up');
});



app.post( '/uploadpdf',upload.single("pdf"), app.post('/uploadpdf', upload.single('pdf'), uploadPdfController))
app.post( '/CommercialServiceAcknowledgment',CommercialServiceController)
app.post( '/RiskManagementAcknowledgment',RiskManagementController)
app.post( '/CreditServiceAcknowledgment',CreditServiceController)


// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


