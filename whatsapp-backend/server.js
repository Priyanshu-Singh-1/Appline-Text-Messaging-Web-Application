//Importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"
import Pusher from "pusher"
import cors from "cors"
 
//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
        appId: "1476694",
        key: "bb4a5f45c8c575a70b72",
        secret: "cc59f7236ecad4c5d887",
        cluster: "ap2",
        useTLS: true
      });

//middleware
app.use(express.json());
app.use(cors());


//DB config
const connection_url = 'mongodb+srv://admin:OHKkz3Ul6pcbcTfS@cluster0.hjpiaz3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connection_url)

//???


const db = mongoose.connection;

db.once('open', ()=>{
        console.log('DB is connected');

        const msgCollection = db.collection('messagecontents');
        const changeStream = msgCollection.watch();

        changeStream.on("change", (change) => {
                console.log("A change occured", change);

                if(change.operationType==='insert') {
                        const messageDetails = change.fullDocument;
                        pusher.trigger('messages', 'inserted' ,
                                {
                                        name: messageDetails.name,
                                        message:messageDetails.message, 
                                        timestamp:messageDetails.timestamp,
                                        received:messageDetails.received,
                                }
                        );
                } else {
                        console.log('Error triggering Pusher')
                }
        });   
});

//API routes
app.get('/', (req, res)=> res.status(200).send('Hello World'));

app.get("/messages/sync", (req, res) => {
        Messages.find((err, data) =>{
                if(err)
                {
                        res.status(500).send(err);
                }
                else{
                        res.status(200).send(data);
                }
        });
});

app.post("/messages/new", (req, res) => {
        const dbMessage = req.body;

        Messages.create(dbMessage, (err, data) =>{
                if(err)
                {
                        res.status(500).send(err);
                }
                else{
                        res.status(201).send(data);
                }
        });
});


//listen
app.listen(port, ()=> console.log(`Listening on local host:${port}`));