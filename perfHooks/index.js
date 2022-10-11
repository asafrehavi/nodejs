//Thanks to https://dev.to/bearer/measuring-performance-in-node-js-with-performance-hooks-585p

const { performance, PerformanceObserver } = require("perf_hooks")

const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(entry)
    })
})

perfObserver.observe({ entryTypes: ["measure"], buffer: true })

performance.mark("example-start")


 someAction()
performance.mark("example-end")

performance.measure("example", "example-start", "example-end")

async function someAction() {
    for (let i=0;i<5000000;i++) {

    }
}


