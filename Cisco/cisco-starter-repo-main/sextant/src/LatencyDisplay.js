import React, {useState} from 'react';

const WebSocketClient = require('websocket').client;
const client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log('Connection Error: ' + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if(message.type === 'utf8') {
            console.log('Received: "' + message.utf8Data + '"');
        }
    });
});

function LatencyDisplay({url}) {
    const [latency, setLatency] = useState(null);
    client.connect(url, 'echo-protocol');
    return (
        <span className='LatencyDisplay'>
            {latency}
        </span>
    );
}

export default LatencyDisplay