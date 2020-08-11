// bring express with common js
const express = require('express');
//initialize app with express
const app = express();
// initialize port 
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server started on ${PORT}...`));


//define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

// index route
app.get('/',(request,response) => {

    response.json({"msg":"welcome to the contact keeper app"});

});

