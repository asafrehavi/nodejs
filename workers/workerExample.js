const { WorkerData, parentPort } = require('worker_threads')

parentPort.addListener( 'message',(messageFromMain) => {
    console.log('message from main',messageFromMain)
    parentPort.postMessage('worker done his job for request ' + messageFromMain )
 })