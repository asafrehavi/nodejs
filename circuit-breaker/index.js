//thanks to https://www.npmjs.com/package/opossum

const CircuitBreaker = require('opossum');
const http = require('http');

function asyncFunctionThatCouldFail(abortSignal, x, y) {
  return new Promise((resolve, reject) => {
    http.get(
      'http://jsonplaceholder.typicode.com/users',
      { signal: abortSignal },
      (res) => {
        if(res.statusCode < 300) {
          resolve(res.statusCode);
          return;
        }

        reject(res.statusCode);
      }
    );
  });
}

const abortController = new AbortController();
const options = {
  abortController,
  timeout: 30000, // If our function takes longer than 3 seconds, trigger a failure
};
const breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);

breaker.fire(abortController.signal)
  .then(console.log)
  .catch(console.error);