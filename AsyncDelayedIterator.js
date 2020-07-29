const delayPromise = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function* asyncCounter(delay, n) {
    for (let i = 1; i <= n; i++) {
        await delayPromise(delay)
        yield i
    }
}

const asyncIterator = async (delay, n, cb, stopcb) => {
    for await(let i of asyncCounter(delay, n)) {
        cb(i)
    }
    stopcb()
}
