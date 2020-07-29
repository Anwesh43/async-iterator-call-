const delayPromise = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function* asyncCounter(n) {
    for (let i = 1; i <= n; i++) {
        await delayPromise(1000)
        yield i
    }
}

const asyncIterator = async (n, cb, stopcb) => {
    for await(let i of asyncCounter(n)) {
        cb(i)
    }
    stopcb()
}
