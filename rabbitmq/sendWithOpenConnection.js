const amqplib = require('amqplib');
const logQueueName = 'LogQueue';
var amqp_url = 'amqp://localhost:5672';
var rabbitConnection;

var logChannel = new Object();


async function connect() {
    this.rabbitConnection = await amqplib.connect(amqp_url, "heartbeat=60");
}

async function createChannels() {
      this.logChannel = await this.rabbitConnection.createChannel();

}

async function sendMessage(queueName ,msg) {
    await this.logChannel.assertQueue(queueName, {durable: true});
     this.logChannel.sendToQueue(queueName, Buffer.from(msg));
}
async function initialize() {
    await connect();
    await createChannels();
    await sendMessage(logQueueName,"this is my test")
    clear();
}

async function clear() {
   this.logChannel.close();
   this.rabbitConnection.close()

}

 initialize();


