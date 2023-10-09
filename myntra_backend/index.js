import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import { checkseller } from './Middlewares/AllMiddleware.js';
import {Get_CurrentUser, Login, Register, editProfile } from './Controllers/User.controller.js';
import { AddProduct, GetEditProduct, Get_Men_Product, Get_Your_Product, SingleProduct, updateyourProduct } from './Controllers/Product.controller.js';
import { AddToCart, GetCartProduct, RemoveCartData, placeOrder } from './Controllers/Buyer.controller.js';

const app=express()
app.use(express.json());
dotenv.config()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("working")
})

app.post('/register',Register);
app.post('/login',Login)
app.post('/getcurrentUser',Get_CurrentUser)
app.post('/addproduct',checkseller,AddProduct)
app.post('/yourProduct',checkseller,Get_Your_Product)
app.post('/men_product',Get_Men_Product)
app.post('/single',SingleProduct)
app.post('/add-to-cart',AddToCart)
app.post('/get-cart-products',GetCartProduct)
app.post('/removeItem',RemoveCartData)
app.post('/placeOrder',placeOrder)
app.patch('/updateproduct',checkseller,updateyourProduct)
app.post("/geteditproduct", checkseller, GetEditProduct);
app.post("/editprofile",editProfile)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB")
}).catch((error) => {
    console.log("Error While Connecting MongoDB", error)
})


app.listen(4001,()=>{
    console.log('Running on 4001')
})