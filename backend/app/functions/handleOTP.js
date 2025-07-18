
const {authenticator} = require("otplib")
authenticator.options = {step:600}
const secretKey = "our-secret" //Store in env variable
function generateOTP(){
    return authenticator.generate(secretKey)
}
function authenticateOTP(token){
    return authenticator.check(token,secretKey)
}
module.exports = {generateOTP,authenticateOTP}