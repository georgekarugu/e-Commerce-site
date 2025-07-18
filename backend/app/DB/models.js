const {model,models} = require("mongoose")
const { productSchema,orderSchema,userSchema } = require("./schemas")


const Product = models.Product || model("Product",productSchema)
const Order = models.Order || model("Order",orderSchema)
const User = models.User || model("User",userSchema)

module.exports = {Product,Order,User}