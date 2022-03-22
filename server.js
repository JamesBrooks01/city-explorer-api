'use strict';

//REQUIRE
// IN SERVERS, YOU USE 'REQUIRE' IN PLACE OF IMPORT
const express = require('express');
require('dotenv').config();
// WE MUST INCLUDE CORS IF WE WANT TO SHARE RESOURCES OVER THE WEB
const cors = require('cors');

//USE
// ONCE SOMETHING IS REQUIRED WE USE IT. THIS IS WEHERE WE ASSIGN THE REQUIRED FIELD A VARIABLE. REACT DOES IT IN ONE STEP WITH IMPORT AND EXPRESS DOES IT IN TWO WITH 'REQUIRE' AND 'USE'
const app = express();
app.use(cors());

//DEFINE PORT AND VALIDATE .env FILE IS WORKING
const PORT = process.env.PORT || 3002;
// IF SERVER IS RUNNING ON 3002, SOMETHING IS WRONG WITH .env FILE OR HOW THE VALUES ARE BEING IMPORTED FROM IT.


//ROUTES
// HERE WE WRITE OUR ENDPOINTS
// app.get() correlates to axios.get
app.get('/', (requestObject, responseObject) => {
  responseObject.send('breaking through to the other side!');
});


// THE LAST ROUTE IS A CATCH ALL OR STAR ROUTE
app.get('*', (requestObject, responseObject) => {
  responseObject.send('The page you are looking for doesn\'t exist');
});

//ERROR HANDLING
// HANDLE ERRORS

//CLASS CONSTRUCTOR


//LISTEN
// START THE SERVER
// LISTEN IS AN EXPRESS METHOD THAT TAKES IN A A PORT VALUE AND A CALLBACK FUNCTION
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
