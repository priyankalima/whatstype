const express =  require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/api');

const app = express();
const port = process.env.port || 4000;

//used cors policy
app.use(cors());

//connect mongo db to server 4000
mongoose.connect('mongodb://localhost:27017/biodata',{useNewUrlParser:true,useUnifiedTopology:true})
.then(
    app.listen(port,() => {
        console.log('Server is successfully running at ' + ':'+port);
        console.log('database is connected successfully');
    }))
.catch((err)=> console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//http request logger
app.use(morgan('tiny'))

//import routes
app.use('/api',routes);



