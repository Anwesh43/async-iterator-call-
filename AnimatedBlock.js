const scGap = 0.02
var w = window.innerWidth
var h = window.innerHeight

window.onresize = () => {
    w = window.innerWidth
    h = window.innerHeight
}
class Block {

    dir = 1
    scale = 0
    updating = false

    init(i, n) {
        const gap = h / n
        this.div = document.createElement('div')
        this.div.style.position = 'absolute'
        this.div.style.top = `${gap * i}px`
        this.div.style.left = '0px'
        this.div.style.width = '100px'
        this.div.style.height = `${gap}px`
        this.div.style.background = 'indigo'
        document.body.appendChild(this.div)
    }

    updateX() {
        this.scale += scGap * this.dir
        console.log(this.scale)
        this.div.style.left = `${(window.innerWidth - 100) * this.scale}px`
    }

    start() {
        if (!this.updating) {
            this.updating = true
            console.log("started updating")
            asyncIterator(20, 1 / scGap, () => {
                console.log("hello")
                this.updateX()
            }, () => {
                this.updating = false
                this.dir *= -1
            })
        }
    }

    handleTap() {
        this.div.onclick = () => {
            this.start()
        }
    }

    static create(i, n) {
        const block = new Block()
        block.init(i, n)
        block.handleTap()
    }
}
