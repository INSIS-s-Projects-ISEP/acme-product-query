
const Eureka = require('eureka-js-client').Eureka;

export const eurekaConfig = new Eureka({
  instance: {
    app: 'product-query',
    hostName: process.env.HOSTNAME || 'localhost',
    ipAddr: '172.0.0.1',
    port: {
      '$': 3000,
      '@enabled': 'true',
    },
    vipAddress: 'product-query',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },

  eureka: {
    host: 'discovery-system',
    port: 8761,
    servicePath: '/eureka/apps/',
    maxRetries: 10,
    requestRetryDelay: 2000,
  },
})