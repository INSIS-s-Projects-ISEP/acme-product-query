import * as amqp from "amqplib";
import { Channel, Connection } from "amqplib";
import { v4 as uuidv4 } from "uuid";
import ProductConsumer from "../messaging/productConsumer";

const host = "localhost";
const port = 5672;
const user = "admin";
const pass = "123456";
const queueName = "product.product-created.product-query." + uuidv4();

const exchangeName = "product.product-created";
const exchangeType = "fanout";

const msg = "Hello, RabbitMQ!";

class RabbitMQConfig {
  private connection: Connection | undefined;
  private channel: Channel | undefined;

  constructor() {
    this.connection = undefined;
    this.channel = undefined;
  }

  async connect() {
    try {
      const connection = await amqp.connect(
        `amqp://${user}:${pass}@${host}:${port}`
      );
      this.channel = await connection.createChannel();

      await this.createQueue();

      await this.createExchangeFanout();

      await this.bindingProductQueueExchange();

      console.log(`Connected to RabbitMQ at ${host}:${port}`);

      const consumer = new ProductConsumer(this.channel, queueName);
      await consumer.consume();
      console.log(`Consumer is running`);
      this.channel.sendToQueue(queueName, Buffer.from(msg));

      console.log(`Message sent: ${msg}`);
      
      return connection;
    } catch (err) {
      console.error(`Error connecting to RabbitMQ: ${err}`);
      process.exit(1);
    }
  }

  async createQueue() {
    try {
      const options = {
        exclusive: true,
        autoDelete: true,
      };
      const queueInfo = await this.channel?.assertQueue(queueName, options);
      console.log(uuidv4());
      if (queueInfo) {
        console.log(`Queue ${queueName} already exists.`);
      } else {
        console.log(`Queue ${queueName} created.`);
      }
    } catch (err) {
      console.error(`Error creating queue: ${err}`);
    }
  }

  async createExchangeFanout() {
    try {
      const createFanout = await this.channel?.assertExchange(
        exchangeName,
        exchangeType,
        { durable: true }
      );

      console.log(`Exchange ${exchangeName} created.`);
      // await this.channel?.close();
      // await this.connection?.close();

      if (createFanout) {
        console.log(`Exchange ${exchangeName} already exists.`);
      } else {
        console.log(`Exchange ${exchangeName} created.`);
      }
    } catch (err) {
      console.error(`Error creating queue: ${err}`);
    }
  }


  async bindingProductQueueExchange(){
   
    await this.channel?.bindQueue(queueName, exchangeName, '');    
  }
}

export default RabbitMQConfig;
