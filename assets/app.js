let globalAvancement = 0
let block = -1
const content = document.getElementById('content')
let currentContent = ""
let currentStyle = ""
let pos = 0
let posStyle = 0

const writeChar = async (chaine) => {

    let {par, stylePos, arrayStyle} = await identify()

    let intervalChar = setInterval(() => {

        if(chaine[globalAvancement] === "!" || chaine[globalAvancement] === "." || chaine[globalAvancement] === "}" || chaine[globalAvancement] === "?") {
            clearInterval(intervalChar)
            setTimeout(() => {
                writeChar(chaine)
            }, 500)
        }
        if (globalAvancement >= fullContent.length) {
            clearInterval(intervalChar)
        } else {
            content.innerHTML += chaine[globalAvancement]
            content.scrollTop = content.scrollHeight
            
            globalAvancement++
        }

        if(globalAvancement < 1090) {
            window.scrollTo(0,document.body.scrollHeight);
        }

        if(globalAvancement === 1319) {
            document.getElementById('nom_site').innerHTML = "Hidari-lab"
        }

        if(globalAvancement === 1634) {
            document.getElementById('logo').innerHTML = "<a href='https://github.com/Mihidari' target='_blank'><img src='assets/images/github.png' width='100px' height='100px' alt='logo-github'/></a>"
        }

        if(globalAvancement === 2575) {
            document.getElementById('titre_exp').innerHTML = 'Mes expériences'
            document.getElementById('titre_code').innerHTML = 'Le Quine du site !'
        }

        if(globalAvancement === 3064) {
            document.getElementsByClassName('head-exp')[0].innerHTML = '<h2 id="titre_exp">Mes expériences</h2><img id="science" src="assets/images/science.png" width="50px" height="50px"/>'
        }

        if(globalAvancement === 3808) {
            document.getElementsByClassName('project')[0].innerHTML = `<img src='assets/images/vlight.png' alt='logo-vlight' width='70px' height='60px'/><p class="project-content">Vlight - Outil de gestion des performances, en temps réel, de serveurs dédiés, VPS, server-less<br><a href="https://vlight.io" target="_blank">https://vlight.io</a></p>` 
            document.getElementsByClassName('project')[1].innerHTML = `<img src='assets/images/symfony.svg' alt='logo-symfony' width='60px' height='60px'/><p class="project-content">Site web sous Symfony pour des associations, back-office et carte interactive avec géolocalisation</p>`
            document.getElementsByClassName('project')[2].innerHTML = `<img src='assets/images/discord.png' alt='logo-discord' width='60px' height='60px'/><p class="project-content">Des bots pour Discord, Slack, Twitch. Gestion des utilisateurs et utilisation d'API externe</p>`
        }

        if(globalAvancement === 3435) {
            clearInterval(intervalChar)
            redaction()
        }

        if(globalAvancement === 4051) {
            document.getElementById('contact').innerHTML = `<hr/><p id="mail">Contact: theo.lanique@gmail.com</p>`
        }

        if(globalAvancement === 4807) {
            clearInterval(intervalChar)
        }

        if (par.indexOf(globalAvancement) !== -1) {
            if(partial[pos] !== undefined) {
                currentContent += partial[pos]
                content.innerHTML = currentContent
                pos++
            }
        }

        if (stylePos.indexOf(globalAvancement) !== -1) {
            if(arrayStyle[posStyle] != undefined) {
                currentStyle += arrayStyle[posStyle]
                document.getElementById('jsstyle').innerHTML = currentStyle
                posStyle++
            }
        }

    }, 18)
}


const identify = () => {

return new Promise((resolve, reject) => {
    let arrayContent = fullContent.split('')
    let par = []
    let stylePos = []
    let arrayStyle = []
    let add = 0

    arrayContent.forEach((value, index) => {
        if(value === '*' && arrayContent[index+1] === '/') {
            par.push(index+2)
            add++
        } else if (value === '}') {
            par.push(index+1)
            stylePos.push(index+1)
            arrayStyle.push(fullContent.slice(par[add-1], par[add]))
            add++
        }
        if (index === (arrayContent.length - 1)) {
            resolve({par, stylePos, arrayStyle})
        }
    })
})
}

let redactionState = 0
let state = 0
let pro = document.getElementsByClassName('project-content');

const redaction = () => {
    let intervalRedac = setInterval(() => {
        pro[state].innerHTML += project[state][redactionState];
        redactionState++
        if(redactionState === project[state].length) {
            redactionState = 0
            state++
            if(state === 1) {
                document.getElementsByClassName('project')[0].innerHTML = `<p class="project-content">Vlight - Outil de gestion des performances, en temps réel, de serveurs dédiés, VPS, server-less<br><a href="https://vlight.io" target="_blank">https://vlight.io</a></p>`
            }
        }
        if (state === project.length) {
            writeChar(fullContent);
            clearInterval(intervalRedac);
        }
    }, 10)
}

writeChar(fullContent);