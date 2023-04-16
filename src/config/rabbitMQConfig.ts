import * as amqp from "amqplib";
import { Channel } from "amqplib";
import { v4 as uuidv4 } from 'uuid';
import ProductConsumer from "../messaging/productConsumer";

const idInstance = uuidv4()
const host = "localhost";
const port = 5672;
const user = "admin";
const pass = "123456";
const queueCreate = "product.product-created.product-query." + idInstance;
const exchangeCreate = "product.product-created";

const queueUpdate = "product.product-updated.product-query." + idInstance;
const exchangeUpdate = "product.product-updated";

const queueDelete = "product.product-deleted.product-query." + idInstance;
const exchangeDelete = "product.product-deleted";

const exchangeType = "fanout";

class RabbitMQConfig {
  private channel: Channel | undefined;

  constructor() {
    this.channel = undefined;
  }

  async connect() {
    try {
      const connection = await amqp.connect(
        `amqp://${user}:${pass}@${host}:${port}`
      );
      this.channel = await connection.createChannel();

      await this.createQueue(queueDelete);
      await this.createQueue(queueUpdate);
      await this.createQueue(queueCreate);

      await this.createExchangeFanout(exchangeDelete);
      await this.createExchangeFanout(exchangeUpdate);
      await this.createExchangeFanout(exchangeCreate);

      await this.bindingProductQueueExchange(queueDelete, exchangeDelete);
      await this.bindingProductQueueExchange(queueUpdate, exchangeUpdate);
      await this.bindingProductQueueExchange(queueCreate, exchangeCreate);

      
      console.log(`Connected to RabbitMQ at ${host}:${port}`);
     
      
      const consumerDel = new ProductConsumer(this.channel, queueDelete);
      await consumerDel.consumeDel();
      const consumerUpdate = new ProductConsumer(this.channel, queueUpdate);
      await consumerUpdate.consumeUpdate();
      const consumerCreate = new ProductConsumer(this.channel, queueCreate);
      await consumerCreate.consumeCreate();
      const consumerRPC = new ProductConsumer(this.channel, '');
      await consumerRPC.consumeRPC('rpc.product.product-query-bootstrapper', idInstance);
      
      
      return connection;
    } catch (err) {
      console.error(`Error connecting to RabbitMQ: ${err}`);
      process.exit(1);
    }
  }

  async createQueue(queueName: string) {
    try {
      const options = {
        exclusive: true,
        autoDelete: true,
      };
      const queueInfo = await this.channel?.assertQueue(queueName, options);
      if (queueInfo) {
        console.log(`Queue ${queueName} already exists.`);
      } else {
        console.log(`Queue ${queueName} created.`);
      }
    } catch (err) {
      console.error(`Error creating queue: ${err}`);
    }
  }

  async createExchangeFanout(exchangeName: string) {
    try {
      const createFanout = await this.channel?.assertExchange(
        exchangeName,
        exchangeType,
        { durable: true }
      );

      if (createFanout) {
        console.log(`Exchange ${exchangeName} already exists.`);
      } else {
        console.log(`Exchange ${exchangeName} created.`);
      }
    } catch (err) {
      console.error(`Error creating queue: ${err}`);
    }
  }

  async bindingProductQueueExchange(queueName: string, exchangeName: string) {
    await this.channel?.bindQueue(queueName, exchangeName, "");
  }
}

export default RabbitMQConfig;
