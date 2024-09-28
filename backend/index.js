const  express = require('express');
const app = express();
const port = 5000;
const router = express.Router();
const auth = require('./routes/auth')
const cors = require('cors');

app.use(cors());
app.use(express.json()); 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admissionPortal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB:', error));

app.use("/auth",auth)

app.listen(port,()=>{
    console.log("server is started")
})
