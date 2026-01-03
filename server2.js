// //Middleware :- Application level middleware

// import express from 'express';

// const app=express();

// //application level middleware for specific route
// app.use("/",(req,res,next)=>{
//     console.log("<h1>application level middleware is invoked</h1>")
//     next();
// });

// //application level middleware for all route

// // app.use((req,res,next)=>{
// //     console.log("<h1>application level middleware is invoked</h1>")
// //     next();
// // });

// app.get("/home",(req,res)=>{
//     res.send("<h1>Home Page</h1>")
// });

// app.get("about",(req,res)=>{
//     res.send("<h1>About Page</h1>")
// });

// app.listen(3009);

//middleware : application level middleware
import express from 'express';
//new one add
const app=express();
//kjqwegfkjwegf

//application level middleware for specific route
app.use("/about",(req,res,next)=>{
 console.log("Application level middleware invoked");
 next();
});

//application level middleware for all route
/*app.use((req,res,next)=>{
 console.log("Application level middleware invoked");
 next();
});*/

/*app.use("/",(req,res,next)=>{
 console.log("Application level middleware invoked");
 next();
});*/

app.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked</h1>");
});

app.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked</h1>");
});


app.listen(3009);
console.log("Server invoked at link http://localhost:3000");