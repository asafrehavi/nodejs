// import { createClient } from 'redis';
const redis = require('redis')

async function testRedis() {
        const client = redis.createClient({
                                            url: 'redis://127.0.0.1:6379'
                                          });

        client.on('error', (err) => console.log('Redis Client Error', err));

        await client.connect();

        const sub =  redis.createClient({
                                                                url: 'redis://127.0.0.1:6379'
                                                              });
        await sub.connect()
         sub.subscribe('SnapshotResult',(message) => {
                    console.log(message)
                });

        await client.publish('Test','some value 1051')
        console.log('after connect')

        await client.set('key', 'value222');
        const value = await client.get('key');
        await client.disconnect();
         }
 testRedis()
