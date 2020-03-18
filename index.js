const axios = require('axios');
const config = require('./config.js');

async function sleep(dur) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('end ' + dur);
        }, dur);
    });
}

async function doIt() {
    try {
        const reqsFunctions = []
        for (let index = 0; index < config.intents; index++) {
            const url = `${config.domain}/${index + 1}`; /* This is just used in this case for the api to test*/
            reqsFunctions.push(axios.get(url));
        }
        reqsFunctions.forEach(async (fn, index) => {
            /* Requests are going to be made every 'config.interval' time, 
            but the response (and function flow) can be delayed in dependace of the api's server response. */
            const [ res, ] = await Promise.all([ fn, sleep(config.interval * index) ]);
            console.log(`Intent: ${index + 1} - Time: ${new Date().toLocaleTimeString()}
            Response: ${res.data.title} `);
        });
    } catch (e) {
        console.log(e);
    }
}

doIt();