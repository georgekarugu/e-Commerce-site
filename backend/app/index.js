const mongoose = require('mongoose');
const express =  require("express");
const passwordEncrypter = require("./middleware/passwordEncrypt");
const {generateOTP,authenticateOTP} = require("./functions/handleOTP")
const {User,Product,Order} = require("./DB/models")
const bcrypt = require("bcrypt"); 
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect('mongodb://localhost/lukustore')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const app = express()
app.use(bodyParser.json({limit:"10mb"}))

app.use(
    cors({
      origin: "http://localhost:5173", // Allow frontend to access backend
      methods: "GET, POST, PUT, DELETE", // Allowed methods
      allowedHeaders: "Content-Type, Authorization", // Allow headers
    })
  );
  

/*

>> querying user's data

>> Sample endpoint : /user?id=9vnkslnr4n4fs
{
 example of response
 _id:otjkngdgbvknmbcv,
    firstName:"first",
    lastName:"last",
    userName:"userName",
    phoneNumber:"0768****",
    email:"kelvin@gmail.com",
}
 */
// app.get("/user", async (req,res) => {
//     try {
//         const {id} = req.query
//         const user = await User.findById(id) 
//         if (!user){
//             res.status(500).json({error:"This account does not exist."})
//             return
//         }
//         res.status(200).json(user)
        
//     } catch (error) {
//         console.log("Querying user data error" ,err)
//         res.status(500).json({error:"Oops...Something went wrong."})
//     }
// })

app.get('/users', async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude passwords
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// app.get("/user/:id", async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id).select("-password"); // Exclude password
//       if (!user) return res.status(404).json({ error: "User not found" });
  
//       res.json(user);
//     } catch (err) {
//       res.status(500).json({ error: "Server error" });
//     }
//   });
  

/* 
>> Loging in

>> request body Example
{
    indentity:"email/username",
    password:"1234"
}
>> response body
{
    _id:otjkngdgbvknmbcv,
    firstName:"first",
    lastName:"last",
    userName:"userName",
    phoneNumber:"0768****",
    email:"kelvin@gmail.com",
    password:"1234"

}
*/

//logging in
app.post("/auth/sign-in",async (req,res) => {
    try {
        const {identity,password} = await req.body
        const user = await User.findOne({$or:[{email:identity},{username:identity}]})
        if (user){
            if (bcrypt.compare(password,user.password)){
                res.json({userID:user._id}).status(200)
            }  
            else {return res.json({error:"You entered incorrent details."}).status(200)}
            return
        }
        res.json({error:"You entered incorrent details."}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

/* 
>> Creating account 

request body example:
{
    firstName:"first",
    lastName:"last",
    
    email:"kelvin@gmail.com",
    password:"1234"
}
*/

//regis
app.post("/auth/verify-account-data",async (req,res) => {
    try {
        const {firstName,lastName,password,email,phoneNumber} = await req.body
        if (!firstName || !lastName || !password || !email){
            res.json({error:"Please fill all the field in the form."}).status(400)
            return
        }
        if (await User.find({email}) > 0){
            res.json({error:"Email is already registered."}).status(400)
            return
        }
        if (await User.find({phoneNumber}) > 0){
            res.json({error:"Phone number is already registered."}).status(400)
            return
        }
        const OTP = generateOTP()
        console.log(OTP) //Should send otp via email/sms
        res.json({}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

/* 
>> Second request after OTP is verified
>> Sample request body
{
    firstName:"first",
    lastName:"last",
    userName:"userName",
    phoneNumber:"0768****",
    email:"kelvin@gmail.com",
    password:"1234"
}
*/
//Second request after OTP is verified
app.post("/auth/create-account",passwordEncrypter,async (req,res) => {
    try {
        const reqBody = await req.body 
        if (!authenticateOTP(reqBody.otp)){
            return res.status(400).json({ error: "Invalid OTP token" });
        }
        const checkUser = await User.find({$or:[{email:reqBody.email},{phoneNumber:reqBody.phoneNumber}]})
        if (checkUser.length > 0) {
            return res.status(400).json({ error: "Such account already exists" });
        }
        const newUser = await new User(req.body)
        newUser.save()
        const {_id} = newUser
        return res.json({_id}).status(200)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Oops...Something went wrong."})
    }
})


//Querying products
//Endpoint example : /products?category=shorts or /products?brand=gucci
//Querying products for a specific user/seller, give the seller's id in seller param
//Endpoint example : /products?seller=fsjfsknvdfvx

app.get("/products",async (req,res) => {
    try {
        const filters =  req.query
        const products = await Product.find(filters).limit(50)
        res.json(products).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})




//Searching for a product
//Sample endpoint : /search?query=shorts 
 
app.get("/search",async (req,res) => {
    try{
        const {query} = req.query
        const searchExp = new RegExp(query,'gims')
        const products = await Product.find({$or:[
            {name:searchExp},
            {description:searchExp},
            {brand:searchExp},
            {category:searchExp}
        ]})
        if (products.length < 1) {
            res.json({error:"Oops...Nothing here."}).status(500)
            return
        }
        res.status(200).json(products)
    }
    catch(err){
        console.log("Product searching error",err)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

/* 
>> Creating new product

>> Request body example :
{
    pictures:["base64string","base64string"],
    name:"product-name",
    description:"lorem ipsum10",
    brand:"gucci",
    sex:"unisex",
    category:"shorts",
    price:100,
    seller:"seller'sID",
}
*/
app.post("/products",async (req,res) => {
    try {
        const newProduct = await new Product(req.body)
        await newProduct.save()
        res.json({message:`${newProduct.name} has been added to your shop`}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

//Updating product
app.put("/products/:id", async (req, res) => {
    try {
        console.log("Received PUT request for ID:", req.params.id);
        console.log("Request body:", req.body); // Debug request payload

        const { name, price, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id.trim(),  // Trim spaces to avoid ID mismatch
            { name, price, stock },
            { new: true }
        );
        if (!updatedProduct) {
            console.log("Product not found!");
            return res.status(404).json({ error: "Product not found" });
        }
        console.log("Product updated successfully:", updatedProduct);
        res.json(updatedProduct);
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

  

//Deleting product
//Request body example : {id:1}

app.delete("/products",async (req,res) => {
    try {
        const {id} = await req.body
        await Product.findByIdAndDelete(id)
        res.json({message:"Your product has been removed successfully."}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})
/* 
orders
*/
app.get("/orders",async (req,res) => {
    try {
        const orders = await Order.find().limit(50).populate("items",["image","name","category","price","status"])
        res.json(orders).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})
app.post("/orders",async (req,res) => {
    try {
        console.log(req.body)
        const newOrder = await new Order(req.body)
        await newOrder.save()
        res.json({message:`New order has been created`}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

app.put("/orders",async (req,res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.body.id,{
            $set:{...req.body}
        })
        
        res.json({message:`New order has been created`}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})
app.delete("/orders",async (req,res) => {
    try {
        await Order.findByIdAndDelete(req.body.id)
        res.json({message:`Order has been deleted successfully`}).status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})


/* 
>> Processing payment
Request body example: 
{
    fisrtName:kelvin,
    lastName:mitau,
    phoneNumber:"0768***"
}
*/
app.post("/payment",async (req,res) => {
     try {
        const reqBody = await req.body
        res.json("").status(200)
    } catch (error) {
        console.error(error)
        res.json({error:"Oops...Something went wrong."}).status(500)
    }
})

app.listen(8080,() => {
    console.log("Listening on port 8080")
})