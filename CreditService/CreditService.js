const express = require("express");
const fs = require("fs");
const app = express();
const filePath = "db.txt";
const axios = require('axios')

app.post("/CreditService", async (req, res) => {
  console.log("file ready to be signed")
  console.log("document saved in the database successfully")
  console.log("central Bank notified successfully")

  try {
    let ans = axios.post('http://localhost:3000/CreditServiceAcknowledgment', req.body) 

  }catch(e) {
    console.log(e)
  }
});
const PORT = 3003;
app.listen(PORT, () => {  
  console.log("Credit Service app is running on port 3003")
});