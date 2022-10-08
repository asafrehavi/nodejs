const { workerData, parentPort }
		= require('worker_threads')
var shouldRunAction = true
setTimeout(()=> shouldRunAction =false ,1000)
while(shouldRunAction) {

}

parentPort.postMessage(
	{ fileName: workerData, status: 'Done' })
