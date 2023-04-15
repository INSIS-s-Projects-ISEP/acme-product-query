"use strict";
// // const amqplib = require('amqplib');
// // const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5673';
// import { Channel, Connection, connect } from "amqplib";
// const config = require('../config/rabbitMQConfig')
// class rabbitMQProducer{
//     public channel: Channel;
//     async createConnection(){
//     const conn: Connection = await connect(config.rabbitMQ.url);
//     const channel: Channel = conn.createChannel();
// }
// async publishMessage(routingKey){
//     if(!this.channel){
//     }
// }
// }
// export default rabbitMQProducer;
// // (async () => {
// //     const connection = await amqplib.connect(amqpUrl, "heartbeat=60");
// //     const channel = await connection.createChannel();
// //     channel.prefetch(10);
// //     const queue = 'user.sign_up_email';
// //     process.once('SIGINT', async () => { 
// //       console.log('got sigint, closing connection');
// //       await channel.close();
// //       await connection.close(); 
// //       process.exit(0);
// //     });
// //     await channel.assertQueue(queue, {durable: true});
// //     await channel.consume(queue, async (msg) => {
// //       console.log('processing messages');      
// //       await processMessage(msg);
// //       await channel.ack(msg);
// //     }, 
// //     {
// //       noAck: false,
// //       consumerTag: 'email_consumer'
// //     });
// //     console.log(" [*] Waiting for messages. To exit press CTRL+C");
// // })();
