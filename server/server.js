import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

//components
import Connection from './connection/db.js';
import Route from './routes/Route.js';
import DefaultData from './default.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

// if ( process.env.NODE_ENV === 'production')
// {
//     app.use(express.static("client/build"));
// }
if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT =  process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@my-inshort-clone.55twicw.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();
