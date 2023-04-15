import * as amqp from "amqplib";
declare class RabbitMQConfig {
    private connection;
    private channel;
    constructor();
    connect(): Promise<amqp.Connection>;
    createQueue(): Promise<void>;
    createExchangeFanout(): Promise<void>;
    bindingProductQueueExchange(): Promise<void>;
}
export default RabbitMQConfig;
