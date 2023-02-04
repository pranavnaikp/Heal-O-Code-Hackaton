import  express, { response }  from "express";
const app = express();
import request from "request";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
import queryParse from "query-string";
import urlParse from "url-parse"
import cors from "cors"
import {OAuth2Client} from 'google-auth-library';

// 672342265446-hb4g3noa5r5tosg37cujkjn20vugvnra.apps.googleusercontent.com


//app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
dotenv.config();

 const connect = async () =>{
    try{
        await mongoose.set('strictQuery', false);
        mongoose.connect("mongodb+srv://pranavnaikp:%40123Pranav@cluster0.pyyq30m.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to mongodb")
    }catch(err){
        throw err;
    }
 };
 mongoose.connection.on("connected", ()=>{
    console.log("connected")
})

mongoose.connection.on("disconnected", ()=>{
    console.log("disconnected")
}) 


app.get("/getURLTing", (req, res) => {
	const oauth2Client = new OAuth2Client(
        //client id
    "171761816224-on64vnjddl13l7558toa0c6q2g8hqglf.apps.googleusercontent.com",
    //client secrete
    "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",

    //link to redirect
    "http://localhost:8080/steps"
    );

    const scopes = ["https://www.googleapis.com/auth/fitness.activity.read profile email openid"];

    const url = oauth2Client.generateAuthUrl({
        access_type:"offline",
        scope:scopes,
        state: JSON.stringify({
            callbackUrl : req.body.callbackUrl,
            userID:req.body.userid
        })
    });
        request(url,(err,response,body) => {
            console.log("error: ",err);
            console.log("statusCode: ", response && response.statusCode);
            res.send({url});
        })
});


app.get("/steps", (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryParse.parse(queryURL.query). code;
    })
//middlewares


const port = process.env.PORT||8080
app.listen(port,()=>{
    connect();
    console.log(`connected to backend, running on port ${port}...`)
})



