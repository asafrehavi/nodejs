// import { createClient } from 'redis';
const redis = require('redis')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        publishRedisMessage()
      })
async function publishRedisMessage() {
        const client = redis.createClient({
                                            url: 'redis://127.0.0.1:6379'
                                          });

        client.on('error', (err) => console.log('Redis Client Error', err));

        await client.connect();

        const sub =  redis.createClient({
                                                                url: 'redis://127.0.0.1:6379'
                                                              });
        await sub.connect()
         sub.subscribe('MyChannelName',(message) => {
                    console.log(message)
                });

        
        

        
        await client.disconnect();
         }
