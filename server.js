// bring express with common js
const express = require('express');


//initialize app with express
const app = express();

// DB connection 
const connectDB = require('./config/db');
connectDB();


// accept body request
app.use(express.json({extended:false}));


// index route
app.get('/',(request,response) => {
    response.json({"msg":"welcome to the contact keeper app"});
});

//define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));


// initialize port 
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server started on ${PORT}...`));
