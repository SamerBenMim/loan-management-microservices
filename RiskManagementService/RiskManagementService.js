const express = require("express");
const fs = require("fs");
const app = express();
const filePath = "db.txt";
const axios = require('axios')
app.use(express.json());


app.post("/RiskManagementNotify", async (req, res) => {
  console.log("final score calculated! ")
  console.log("client notified successfully")
  
  let id = req.body.id
  let amount = req.body.amount
  let score = req.body.score
  let name = req.body.name
  let finalScore = req.body.score * (Math.random()+.7);

  req.body.finalScore = finalScore

  
  try {
    let ans = axios.post('http://localhost:3000/RiskManagementAcknowledgment', req.body) 
  }catch (e){
    console.log(e)
  }
  console.log(
    "acknowledgment sent successfull to ProcessService"
  )

  


values = [ id , amount , score , name , score , finalScore]

fs.appendFile(filePath, '\n'+values.join(","), (err) => {
  if (err) {
    console.error("An error occurred:", err);
  } else {
    console.log(`Values written to file: ${filePath}`);
  }
});
});


const PORT = 3002;
app.listen(PORT, () => {  
  console.log("Risk Management Service app is running on port 3002")
});