import { Channel, ConsumeMessage } from 'amqplib';
import ProductRepository from "../domain/repository/productRepository";

class ProductConsumer {
  productRepository: ProductRepository;

  private channel: Channel;
  private queueName: string;

  constructor(channel: Channel, queueName: string) {
    this.channel = channel;
    this.queueName = queueName;
    this.productRepository = new ProductRepository();
  }

  public async consumeRPC(queueN: string, idInstance: string) {

    this.channel.assertExchange(queueN, 'fanout');

    const queueResult = this.channel.assertQueue('', {
      exclusive: true, autoDelete: true
    });

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C",(await queueResult).queue);
      this.channel.bindQueue((await queueResult).queue, queueN, '');


        this.channel.consume((await queueResult).queue, (msg) => {
          console.log(`Resposta: ${msg?.content.toString()}`);
        }, { noAck: true });

        const payload = JSON.stringify(idInstance)
      const options = { replyTo: (await queueResult).queue};
      this.channel.sendToQueue(queueN, Buffer.from(JSON.stringify(payload)), options);

      await this.channel.deleteQueue((await queueResult).queue);
              
  }

  public async consumeGet(): Promise<void> {
    // console.log("Consumer listening get...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg !== null) {
        this.getAllProdRabbitMQ(msg);
      }
    });
  }

  public async consumeDel(): Promise<void> {
    // console.log("Consumer listening delete...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg) {
        try {
          const sku = msg.content.toString("utf-8");

          await this.productRepository.deleteBySku(sku);
        } catch (error) {
          console.error("Error parsing message", error);
          this.channel.nack(msg);
        }
      }
    });
  }

  public async consumeUpdate(): Promise<void> {
    console.log("Consumer listening update...");
    await this.channel.consume(this.queueName, async (msg) => {
      console.log("Consumer listening create...", this.queueName);
      if (msg !== null) {
        const { sku, designation, description } = JSON.parse(
          msg.content.toString()
        );
        console.log(
          "update",
          sku,
          msg.content.toString(),
          msg.content.toString("utf-8")
        );

        this.updateProdRabbitMQ(
          this.queueName,
          sku,
          designation,
          description,
        );
      }
    });
  }

  public async consumeCreate(): Promise<void> {
    console.log("Consumer listening create...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg !== null) {
        const { sku, designation, description } = JSON.parse(
          msg.content.toString()
        );

        this.createProdRabbitMQ(sku, designation, description, msg);
      }
    });
  }

  async createProdRabbitMQ(
    sku: string,
    designation: string,
    description: string,
    msg: ConsumeMessage
  ) {
    try {
      await this.productRepository.create(sku, designation, description);
      this.channel.ack(msg);
    } catch (error) {
      this.channel.ack(msg);
      
    }
  }

  async deleteProdRabbitMQ(
    sku: string,
  ) {
    await this.productRepository.deleteBySku(sku);
  }

  async updateProdRabbitMQ(
    sku: string,
    designation: string,
    description: string,
    msg: ConsumeMessage
  ) {
    // try {
      await this.productRepository.update(sku, designation, description);

      this.channel.ack(msg);
      // this.channel.sendToQueue(
      //   queueName,
      //   Buffer.from(
      //     JSON.stringify({
      //       success: true,
      //       message: "Product updated successfully",
      //     })
      //   )
      // );
      // this.channel.ack(msg);
      // this.channel.sendToQueue(
      //   queueName,
      //   Buffer.from(
      //     JSON.stringify({ success: false, message: "Product not found" })
      //   )
      // );
    // } catch (error) {
      // this.channel.ack(msg);
      // this.channel.sendToQueue(
      //   queueName,
        // Buffer.from(
        //   JSON.stringify({
        //     success: false,
        //     message: "Failed to update product",
        //   })
        // )
      // );
    // }
  }

  async getAllProdRabbitMQ(msg: ConsumeMessage): Promise<void> {
    try {
      const products = await this.productRepository.findAllProducts();
      const productsBuffer: Buffer = Buffer.from(JSON.stringify(products));
      this.channel.sendToQueue("products_response", productsBuffer);
      this.channel.ack(msg);
    } catch (error) {
      console.error(error);
      this.channel.nack(msg);
    }
  }

  async getBySkuProdRabbitMQ(sku: string, msg: ConsumeMessage): Promise<void> {
    try {
      const products = await this.productRepository.findProductBySku(sku);
      const productsBuffer: Buffer = Buffer.from(JSON.stringify(products));
      this.channel.sendToQueue("products_response", productsBuffer);
      this.channel.ack(msg);
    } catch (error) {
      console.error(error);
      this.channel.nack(msg);
    }
  }

  async getByDesigProdRabbitMQ(
    designation: string,
    msg: ConsumeMessage
  ): Promise<void> {
    try {
      const products = await this.productRepository.findByDesignation(
        designation
      );
      const productsBuffer: Buffer = Buffer.from(JSON.stringify(products));
      this.channel.sendToQueue("products_response", productsBuffer);
      this.channel.ack(msg);
    } catch (error) {
      console.error(error);
      this.channel.nack(msg);
    }
  }
}

export default ProductConsumer;
