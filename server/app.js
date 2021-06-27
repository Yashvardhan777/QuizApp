var express = require('express'),
    app = express();

const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/register', (req, res)=>{
    console.log(req.body);
    res.json({
        message: "Recieved Details"
    })  
})

app.listen(3001, () => {
    console.log("App is live")
})