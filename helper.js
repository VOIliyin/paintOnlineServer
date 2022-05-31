function connectionHandler(ws, mes, aWss) {
    ws.id = mes.id;

    broadcastConnection(mes, aWss);
}

function broadcastConnection(mes, aWss) {
    aWss.clients.forEach((client) => {
        if (client.id === mes.id) {
            client.send(JSON.stringify(mes));
        }
    });
}

module.exports = {
    connectionHandler,
    broadcastConnection,
};
