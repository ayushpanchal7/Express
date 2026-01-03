import express from 'express'

const app=express();

const urlRoutes = "<h2>Click to redirect!!!</h2><a href='/'>Home</a><br><a href='/about'>About</a><br><a href='/contact'>Contact</a><br><a href='/service'>Service</a><br><a href='/register'>Register</a><br><a href='/login'>Login</a>";

app.get("/",(res,req)=>{
    res.send("<h1>Page</h1>");
})

app.get("/home",(res,req)=>{
    res.send("<h1>Home url invoked</h1>"+urlRoute);
});

app.get("/contact",(res,req)=>{
    res.send("<h1>Contact url invoked</h1>"+urlRoute);
});

app.get("/service",(res,req)=>{
    res.send("<h1>Service url invoked</h1>"+urlRoute);
});

app.post("/service",(res,req)=>{
    res.send("<h1>Service url invoked</h1>"+urlRoute);
});

app.get("/register",(res,req)=>{
    res.send("<h1>Register url invoked</h1>"+urlRoute);
});

app.get("/login",(res,req)=>{
    res.send("<h1>Login url invoked</h1>"+urlRoute);
    
});

app.listen(3002);