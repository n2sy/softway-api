const express = require("express");
const mongoose = require("mongoose");

const cvRoutes = require("./routes/cv");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    next();
    
})

app.use(express.json());

app.use('/cv', cvRoutes);

mongoose.connect('mongodb://localhost:27017/softwayCv', {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(app.listen(3000, console.log("Server Started")))
    .catch(err => console.log(err))




