const axios = require('axios')
const FormData = require('form-data');
const CommercialServiceController = async (req , res) =>{
    let o = {
        id : req.body.id,
        amount : req.body.amount,
        score : req.body.score,
        name : req.body.name
    }
    try{

        console.log('request sent to Risk management Service ')
        let ans  = await axios.post('http://localhost:3002/RiskManagementNotify',req.body)
    }catch(e){
        console.log(e)
    }

    res.json({
        body :req.body
    })
}

const RiskManagementController = async (req , res) =>{
    console.log("RiskManagement Acknowledgment received successfully")
    console.log("request sent to Credit Service successfully")

    if(req.body.finalScore >= 0.5){
        try{
            let ans  = await axios.post('http://localhost:3003/CreditService',req.body)
            
        }catch(e){
            console.log(e)
        }
        res.json({body :req.body})
    }
    else{
        console.log("client rejected")
        
    }
}
const CreditServiceController =  (req , res) =>{

    console.log("CreditService Acknowledgment received successfully")
}

const uploadPdfController = async (req , res) =>{

        try {
          const formData = new FormData();
          console.log("Pdf uploaded successfully and sent to Commercial Service.")
          formData.append('pdf', req.file.buffer, req.file.originalname);
          const response = await axios.post('http://localhost:3001/uploadpdf', formData, {
            headers: {
              ...formData.getHeaders(),
            },
          });
          console.log("Commercial Service Acknowledgment received successfully")
          res.send(response.data);
        } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred');
        }
      
}


module.exports = {
    CommercialServiceController,CreditServiceController,RiskManagementController,uploadPdfController
}
