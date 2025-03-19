const express = require('express');
const app = express();
const PORT = process.env.PORT;
require('dotenv').config();

//Setup the view engine 
app.set('view engine', 'ejs');
app.set('viewa', './views');


app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`);
});