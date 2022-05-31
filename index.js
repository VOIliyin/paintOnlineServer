const express = require('express');
const WS = require('express-ws');
const helper = require('./helper.js');

const app = express();
const WSServer = WS(app);
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 5000;

app.ws('/', (ws, req) => {
    console.log('Подлючен');
    ws.on('message', (mes) => {
        const mesData = JSON.parse(mes);
        switch (mesData.method) {
            case 'connection':
                helper.connectionHandler(ws, mesData, aWss);
                break;
            case 'draw':
                helper.broadcastConnection(mesData, aWss);
                break;
        }
    });
});

app.listen(PORT, () => console.log('good'));
