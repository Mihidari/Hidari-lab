class Quine {
    constructor(text, content, style, speed = 18) {
        this.avancement = 0
        this.speed = speed
        this.content = content
        this.taggedText = text
        this.style = style
        this.specialChar = ["!", ".", "}", "?"]
        this.currentContent = ''
        this.cleanTag()
    }

    start() {
        this.intervalChar = setInterval(() => {
            if(this.specialChar.indexOf(this.screenPlay[this.avancement]) !== -1) {
                this.pause(500)
            }
            if (this.avancement >= this.screenPlay.length) {
                clearInterval(this.intervalChar)
            } else {
                content.innerHTML += this.screenPlay[this.avancement]
                content.scrollTop = content.scrollHeight
                
                this.avancement++
            }
            if (this.stylePos.indexOf(this.avancement) !== -1) {
                if(this.arrayStyle[this.posStyle] != undefined) {
                    this.style.innerHTML += this.arrayStyle[this.posStyle]
                    this.posStyle++
                }
            }
            if (this.par.indexOf(this.avancement) !== -1) {
                if(this.partial[this.pos] !== undefined) {
                    this.currentContent += this.partial[this.pos]
                    content.innerHTML = this.currentContent
                    this.pos++
                }
            }
        }, this.speed)
    }

    pause(duration) {
        if(this.intervalChar) {
            clearInterval(this.intervalChar)
            setTimeout(() => {
                this.start()
            }, duration)
        }
    }

    stop() {
        if(this.intervalChar) clearInterval(this.intervalChar)
    }

    identify() {
        let arrayContent = this.screenPlay.split('')

        this.par = []
        this.stylePos = []
        this.arrayStyle = []
        this.arrayJS = []
        this.jsPos = []
        this.posStyle = 0
        this.pos = 0
        let add = 0
        let line = false

        for(let i = 0; i < arrayContent.length; i++) {
            if(arrayContent[i] === '*' && arrayContent[i+1] === '/') {
                this.par.push(i+2)
                add++
            } else if (arrayContent[i] === '}') {
                this.par.push(i+1)
                this.stylePos.push(i+1)
                this.arrayStyle.push(this.screenPlay.slice(this.par[add-1], this.par[add]))
                add++
            } else if (line === true && arrayContent[i] === '\n') {
                line = false
                this.par.push(i+1)
                this.jsPos.push(i+1)
                this.arrayJS.push(this.screenPlay.slice(this.par[add-1], this.par[add]))
                add++
            } else if(arrayContent[i] === '$'){
                line = true
            }
        }
    }

    cleanTag() {
        const regex = /<[^>]*>/g
        this.screenPlay = this.taggedText.replace(regex, '')

        const taggedSplit = this.taggedText.split('')

        this.partial = []
        let state = 0

        for(let i =0; i < taggedSplit.length; i++) {
            if(taggedSplit[i] === '\n' && taggedSplit[i+1] === '\n') {
                this.partial.push(this.taggedText.substring(state, i))
                state = i
            }
        }

        this.identify()
    }
}

let quine = new Quine(trueText, document.getElementById('content'), document.getElementById('jsstyle'), 18)
console.log(quine)
quine.start()
