const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { createWorker } = require("tesseract.js");
const pdf2image = require("pdf2image");
const gm = require("gm");
const app = express();
const filePath = "db.txt";
const upload = multer({ dest: "uploads/images" });
const axios = require('axios')

app.post("/uploadpdf", upload.single("pdf"), async (req, res) => {
  console.log("Pdf received and sent to OCR succesfully ")
  try {
    const pdfPath = req.file.path;

    // Convert PDF to images
    const images = await pdf2image.convertPDF(pdfPath);
    // Initialize Tesseract worker
    const worker = createWorker({
      logger: (m) => {},
    });

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    // Read text from images
    let extractedText = "";
    for (const image of images) {
      const { data } = await worker.recognize(image.path);
      extractedText += data.text;
    }

   

    // id name amount score  
    // Clean up temporary files
    fs.unlinkSync(pdfPath);
    for (const image of images) {
      fs.unlinkSync(image.path);
    }
    await worker.terminate();
    let id = Math.floor(10000*Math.random(10000));
    let amount = extractedText.split("$")[1].substring(1, 5);
    let score = 1 - amount*1 / 10000;
    let name = extractedText.split(" ")[1]+" "+extractedText.split(" ")[2].split("\n")[0]; 

    let values = [
      id , amount , score , name
    ]
    fs.appendFile(filePath, '\n'+values.join(","), (err) => {
      if (err) {
        console.error("An error occurred:", err);
      } else {
        console.log(`Values extracted successfully and written to file: ${filePath}`);
      }
    });

    // infom processSercice
    let data = axios.post(
      "http://localhost:3000/CommercialServiceAcknowledgment",
      {
        id,
        amount,
        score,
        name
      }
      
    )
    console.log(
      "acknowledgment sent successfull to ProcessService"
    )
    return res.json({ id,name,score,amount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while processing the PDF file");
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log("Commercial Service is running on port 3001"));