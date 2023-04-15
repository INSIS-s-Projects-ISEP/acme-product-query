import { Channel } from 'amqplib';

class ProductConsumer {
  private channel: Channel;
  private queueName: string;

  constructor(channel: Channel, queueName: string) {
    this.channel = channel;
    this.queueName = queueName;
  }

  public async consume(): Promise<void> {

    console.log('Consumer listening for messages...');
    await this.channel.consume(this.queueName, (msg) => {
      if (msg !== null) {
        console.log(msg.content.toString());
        this.channel.ack(msg);
      }
      }, { noAck: false });
    }
}

export default ProductConsumer;