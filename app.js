const express = require("express");
const mongoose = require("mongoose");

const cvRoutes = require("./routes/cv");
const authRoutes = require("./routes/auth");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
    
})

app.use(express.json());

app.use('/cv', cvRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({
        message : message,
        data : data
    })
})

mongoose.connect('mongodb://localhost:27017/softwayCv', {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(app.listen(3000, console.log("Server Started")))
    .catch(err => console.log(err))




