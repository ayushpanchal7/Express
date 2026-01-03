import express from 'express'

const app=express();

app.get("/",(res,req)=>{
    res.send("<h1>ayush</h1>");
})