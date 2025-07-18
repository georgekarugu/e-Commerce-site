 const bcrypt = require("bcrypt") 
 async function passwordEncrypter (req,res,next){
     try{
        const userPassword = await req.body.password
        req.body.password = await bcrypt.hash(userPassword,10)
        next()
    }
    catch(err){
        console.log("Unable to hash")
        res.json({error:"Enter a valid password"}).status(500);
    }
}

module.exports = passwordEncrypter;