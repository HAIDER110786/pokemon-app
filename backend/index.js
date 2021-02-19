const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
env.config();
app.use(cors());


app.listen(port,(e)=>{
    if(e)throw e;
    console.log(`listening on port ${port}`)
})