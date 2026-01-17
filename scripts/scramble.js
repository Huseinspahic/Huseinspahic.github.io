class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '0123456789'
        this.update = this.update.bind(this)
    }

    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise(resolve => this.resolve = resolve)
        this.queue = []

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }

    update() {
        let output = ''
        let complete = 0

        for (let i = 0; i < this.queue.length; i++) {
            let { from, to, start, end, char } = this.queue[i]

            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }

        this.el.innerHTML = output

        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

/* ============================
   DATA
============================ */

const occupationText = ['Occupation:']
const roles = ['ServiceNow Technical Architect', 'Enterprise Platform Architect']
const nameText = ['Name: Ahmed Huseinspahić']

/* ============================
   INIT
============================ */

const occupationEl = document.querySelector('.occupationtext')
const roleEl = document.querySelector('.randomtext')
const nameEl = document.querySelector('.nametext')

const occupationScramble = new TextScramble(occupationEl)
const roleScramble = new TextScramble(roleEl)
const nameScramble = new TextScramble(nameEl)

occupationScramble.setText(occupationText[0])
nameScramble.setText(nameText[0])

let index = 0
setInterval(() => {
    roleScramble.setText(roles[index])
    index = (index + 1) % roles.length
}, 3000)
