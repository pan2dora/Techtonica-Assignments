import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import {fakedataTF , fakedataMC, fakedataAny}  from './fakedata.js';

const app = express();
const PORT = 5700;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  //hardcode the game response for testing reasons to don't saturate my API call. 
/*
app.get('/', (req, res) =>{
   res.json(fakedata);
})
*/


//make any 

app.get('/api/game', async(req, res) =>{
  try {
    const URL = "https://opentdb.com/api.php?amount=7&category=12&difficulty=easy"
    const apiRequest = await fetch(URL);
    const questions = await apiRequest.json();
    res.send(questions)
  }catch(err){
console.log(err)
  }
})

//Testing 
app.get('/api/fakegame', (req, res) =>{
  res.json(fakedataAny);
})

app.get('/api/fakegameTF', (req, res) =>{
  res.json(fakedataTF);
})

app.get('/api/fakegameMC', (req, res) =>{
  res.json(fakedataMC);
})

app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));