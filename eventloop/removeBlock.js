//Example of solving the block issue that exist at blockTest with worker
//the work of the worker will start and will never end
//on the meantime the main thread will continue to run 
//thanks to geekforGeeks for the worker example 
//https://www.geeksforgeeks.org/node-js-worker-threads/
const { Worker } = require('worker_threads')
function checkForEventLoopBlock() {
    setInterval(()=> {
      console.log('event loop is free to take messages at '+ new Date() )
    },500)
  }
function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(
                './worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(
`Stopped the Worker Thread with the exit code: ${code}`));
        })
    })
}
  
async function run() {
    const result = await runService('GeeksForGeeks')
    console.log(result);
}
  
run().catch(err => console.error(err))
checkForEventLoopBlock()