import { Channel } from 'amqplib';
declare class ProductConsumer {
    private channel;
    private queueName;
    constructor(channel: Channel, queueName: string);
    consume(): Promise<void>;
}
export default ProductConsumer;
