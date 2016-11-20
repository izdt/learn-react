import express from 'express';
import {MongoClient} from 'mongodb';
import MongoConfig from 'db/mongodb.config'

let app = express();

app.use(express.static('public'));
//app.get('/', (req,res)=>res.send('Hello express!'));

app.listen(3000);

MongoClient.connect(MongoConfig.connectString, (err, database)=>{
    if(err) throw err;
    database.collection('links').find({}).toArray((err,links)=>{
        if(err) throw err;
        console.log(links);
    });
});