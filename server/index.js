import  express, { response }  from "express";
const app = express();
const port = 8080;
import {google} from "googleapis";
import request from "request";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
import queryParse from "query-string";
import urlParse from "url-parse"
import cors from "cors"
// 672342265446-hb4g3noa5r5tosg37cujkjn20vugvnra.apps.googleusercontent.com

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/getURLTing", (req, res) => {
    const oauth2Client = new google.auth.Oauth2(
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
app.listen (port, () => console.log(`GOOGLE FIT IS LISTENING ON PORT ${port}`));