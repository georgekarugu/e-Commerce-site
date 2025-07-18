const {Schema} = require("mongoose") 

const productSchema = new Schema(
    {
    image:{type:String},
    name:{type:String,required:true},
    description:{type:String,required:true},
    brand:{type:String,required:true},
    sex:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,default:100},
    seller:{type:String,required:true},
    createdAt:Date
    }
,{timestamps:{createdAt:"createdAt"}})

const userSchema = new Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        phoneNumber:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        createdAt:Date
    }
,{timestamps:{createdAt:"createdAt"}})

const orderSchema = new Schema(
    {
        items:[{type:Array,required:true,ref:"Product"}],
        status:{type:String,default:"pending"},
        totalAmount:{type:Number,required:true},
    }
,{timestamps:{createdAt:"createdAt"}})

module.exports = {productSchema,userSchema,orderSchema}