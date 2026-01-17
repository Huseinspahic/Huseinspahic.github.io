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
            const start = Math.floor(Math.random() * 25)
            const end = start + Math.floor(Math.random() * 25)
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
                if (!char || Math.random() < 0.18) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }

        const showCursor = this.el.classList.contains('randomtext');
this.el.innerHTML = showCursor
  ? output + `<span class="cursor">▌</span>`
  : output;
        
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

/* =========================
   INIT
========================= */

const occupationEl = document.querySelector('.occupationtext')
const roleEl = document.querySelector('.randomtext')
const nameEl = document.querySelector('.nametext')
const intro = document.getElementById('Introduction')
const container = document.getElementById('Container')

const occupation = new TextScramble(occupationEl)
const role = new TextScramble(roleEl)
const name = new TextScramble(nameEl)

occupation.setText('Occupation:')

const roles = [
    'ServiceNow Technical Architect',
    'Enterprise Platform Architect',
    'DevOps & Automation Specialist'
]

let index = 0

const cycleRoles = () => {
    role.setText(roles[index]).then(() => {
        setTimeout(cycleRoles, 2600)
    })
    index = (index + 1) % roles.length
}

setTimeout(() => {
    cycleRoles()
}, 400)

setTimeout(() => {
    name.setText('Ahmed Huseinspahić')
}, 1800)

/* =========================
   TRANSITION INTO RESUME
========================= */

setTimeout(() => {
    intro.classList.add('lax', 'dim')
}, 5500)
