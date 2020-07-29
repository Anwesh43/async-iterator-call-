const scGap = 0.02

class Block {

    dir = 1
    scale = 0
    updating = false

    init(i) {
        this.div = document.createElement('div')
        this.div.style.position = 'absolute'
        this.div.style.top = '0px'
        this.div.style.left = '0px'
        this.div.style.width = '100px'
        this.div.style.height = '100px'
        this.div.style.background = 'indigo'
        document.body.appendChild(this.div)
    }

    updateX() {
        this.scale += scGap * this.dir
        this.div.style.left = (window.innerWidth - 100) * this.scale
    }

    start() {
        if (!this.updating) {
            this.updating = true
            asyncCounter(1 / scGap, () => {
                this.updateX()
            }, () => {
                this.updating = true
            })
        }
    }

    handleTap() {
        this.div.onmousedown = () => {
            this.start()
        }
    }

    static create(i) {
        const block = new Block()
        block.init(i)
        block.handleTap()
    }
}
