// Powered by Cloud Functions for Firebase

'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const axios = require('axios');
const http = require('http'), vm = require('vm');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  
  const App = require('actions-on-google').ApiAiApp;
  exports.curses = (request, responses) => {
    const app = new App({ request, responses });
	function Reduction (app){
	  

axios.post('https://mandrillapp.com/api/1.0/messages/send.json', {
    key: 'e3586a5261ec9f1ab7d213c17a71c164-a4502f89-d2f7da1d',
    message: {
      from_email: 'voodoostkj@gmail.com',
      to: [
          {
            email: 'alem.mai@gmail.com',
            name: 'Mai Alem',
            type: 'to'
          }
       
        ],
      autotext: 'true',
      subject: 'Receipt for your Donation',
      html: 'Hello Mai alem, you have sent a payment of $1 to Social Charity Funds. It may take some time for this transaction to appear in your account Voodoo Team'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

	const actionMap = new Map();
	actionMap.set('reduction', Reduction);
	app.handleRequest(actionMap);

}


  intentMap.set('Default Fallback Intent', fallback);
  agent.handleRequest(intentMap);
}});
