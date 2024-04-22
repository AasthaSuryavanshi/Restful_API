require('dotenv').config({path:'./.env'});
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')


// db connection
require('./models/connnection').mongoconnection()

// / setting looger to get history or routes
app.use(require("morgan")("tiny"))
// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended:true}));



app.use('/api/user', indexRouter);   //wild card route - tab chalte h jab koi route nhi chlta

app.all('*',(req,res) => {
    res.status(404).json({ url: req.url ,message: 'page not found'})
});








// ----  connectiong server  ----

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})