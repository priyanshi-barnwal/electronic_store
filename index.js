
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/electronic/index.html");
})

app.get("/index.html", (req, res)=>{
    res.sendFile(__dirname+"/electronic/index.html");
})

app.get("/about.html",(req, res)=>{
    res.sendFile(__dirname+"/electronic/about.html");
})

app.get("/contact.html",(req, res)=>{
    res.sendFile(__dirname+"/electronic/contact.html");
})

app.get("/login.html",(req, res)=>{
    res.sendFile(__dirname+"/electronic/login.html");
})

app.get("/register.html",(req, res)=>{
    res.sendFile(__dirname+"/electronic/register.html");
})

app.listen(1234, ()=>{
    console.log("Server started");
})

