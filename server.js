const express = require("express")
const bodyParser = require("body-parser")

const app = express()


// for OTP setup
// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = "AC009bf1b8d18005d8b6dd79376be1398f"
const authToken = "66a8732128eb5f739eb51a4680f26821"

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


app.get("/", (req,res) => {
    const otp = Math.floor(Math.random() * 10000) + 1
       client.messages
        .create({
            to: '+917467816084',
            from: '+12183072771',
            body: `Your One TIme Password ${otp}. Do not share with anyone!`,
        })
        .then(message =>
            res.status(200).json({
                msg:"succes",
                otp
            }))
        .catch(err =>
            res.status(200).json({
                msg:"failed",
                err
            }))
        //   end otp setup code

        
})

app.listen(3000, () => {
    console.log("Running")
})