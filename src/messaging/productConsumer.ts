import { Channel, ConsumeMessage } from "amqplib";
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

  public async consumeGet(): Promise<void> {
    console.log("Consumer listening get...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg !== null) {

        this.getAllProdRabbitMQ( msg);      
        
      }
    });
  }

  public async consumeDel(): Promise<void> {
    console.log("Consumer listening delete...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg !== null) {
        const { sku } = JSON.parse(
          msg.content.toString()
        );

        this.deleteProdRabbitMQ(this.queueName,sku, msg);      
        
      }
    });
  }

  public async consumeUpdate(): Promise<void> {
    console.log("Consumer listening update...");
    await this.channel.consume(this.queueName, async (msg) => {
      if (msg !== null) {
        const { sku, designation, description } = JSON.parse(
          msg.content.toString()
        );

        this.updateProdRabbitMQ(this.queueName, sku, designation, description, msg);  
        
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

  async createProdRabbitMQ(sku: string, designation: string, description: string, msg: ConsumeMessage){
    try {
      await this.productRepository.create(sku, designation, description);
      this.channel.ack(msg);
      this.channel.sendToQueue(
        "products",
        Buffer.from(
          JSON.stringify({
            success: true,
            message: "Product saved successfully",
          })
        )
      );
    } catch (error) {
      this.channel.ack(msg);
      this.channel.sendToQueue(
        "products",
        Buffer.from(
          JSON.stringify({
            success: false,
            message: "Failed to save product",
          })
        )
      );
    }
  }

  async deleteProdRabbitMQ(queueName: string, sku: string, msg: ConsumeMessage){

    await this.productRepository.deleteBySku(sku);
    console.log("delataddddddddddd",queueName)
    try{
        this.channel.sendToQueue(
          "products",
          Buffer.from(
            JSON.stringify({
              success: true,
              message: `Product with SKU ${sku} was deleted successfully`,
            })
          )
        );
           } catch{
        this.channel.ack(msg);
        this.channel.sendToQueue(
          "products",
          Buffer.from(
            JSON.stringify({
              success: false,
              message: `Product with SKU ${sku} was not found`,
            })
          )
        );
      }
      
    }

    async updateProdRabbitMQ(queueName: string, sku: string, designation: string, description: string, msg: ConsumeMessage){
      try {
        await this.productRepository.update(sku, designation, description );
  
          this.channel.ack(msg);
          this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ success: true, message: "Product updated successfully" })));
          this.channel.ack(msg);
          this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ success: false, message: "Product not found" })));
        
      } catch (error) {
        this.channel.ack(msg);
        this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ success: false, message: "Failed to update product" })));
      }
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

    async getByDesigProdRabbitMQ(designation: string, msg: ConsumeMessage): Promise<void> { 
      try {
        const products = await this.productRepository.findByDesignation(designation);
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
