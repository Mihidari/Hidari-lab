let partial =[`<span class="comment">/**
 * Bienvenue sur Hidari-lab !
 * Je suis un développeur NodeJs, React & Symfony,
 * mais pour cette fois je vous laisse avec mon robot.
 */</span>`,

`

<span class="comment">/**
 * Robot rights protected under BOT License
 * Starting bot.....
 * 
 * Hey, bienvenue.
 * 
 * C'est moi Robot2H.
 * 
 * J'étais justement en train de générer un nouveau site.
 * 
 * Vous pouvez regarder si vous voulez.
 * 
 */</span>`,

`

<span class="comment">/**
 * Commençons par un fond un peu plus sombre.
 */</span>`,

`

<span class="selector">body</span> {
    <span class="prop">background-color:</span> <span class="value">#161616</span>;
}`,

`

<span class="comment">/**
 * Oups désolé, je vous avais déjà oublié.
 */</span>`,

`

<span class="selector">pre</span> {
    <span class="prop">color:</span> <span class="value">white</span>;
}`,

`

<span class="comment">/**
 * C'est plus clair comme ça non ?
 * Essayons de rendre le texte encore plus lisible.
 */</span>`,

 `
 
<span class="selector">.comment</span> { <span class="prop">color:</span> <span class="value">#888</span>; <span class="prop">font-style:</span> <span class="value">italic</span>}`,

 `
<span class="selector">.selector</span> { <span class="prop">color:</span> <span class="value">#E69F0F</span>}`,

 `
<span class="selector">.prop</span> { <span class="prop">color:</span> <span class="value">#64D5EA</span>}`,

 `
<span class="selector">.value</span> {<span class="prop">color:</span> <span class="value">#BE84F2</span>}`,
 
 `

<span class="comment">/**
 * Parfait !
 */</span>
 `,

 `
 
<span class="comment">/**
 * Une dernière chose pour mettre en place notre plan de travail
 */</span>`,


 `

<span class="selector">pre</span> {
    <span class="prop">height:</span> <span class="value">40vh</span>;
    <span class="prop">background-color:</span> <span class="value">#111</span>;
    <span class="prop">overflow-y:</span> <span class="value">scroll</span>;
    <span class="prop">overflow-x:</span> <span class="value">hidden</span>;
    <span class="prop">width:</span> <span class="value">40vw</span>;
    <span class="prop">margin:</span> <span class="value">0</span>;
    <span class="prop">position:</span> <span class="value">absolute</span>;
    <span class="prop">top:</span> <span class="value">50%</span>;
    <span class="prop">left:</span> <span class="value">50%</span>;
    <span class="prop">transform:</span> <span class="value">translate(-50%, -50%)</span>;
}
 `,

`

<span class="comment">/**
 * Bien, nous voila enfin prêt pour passer aux choses sérieuses.
 * Commençons par décrire l'identité du site avec tout simplement...
 * Le nom du site.
 */</span>`,

`

<span class="selector">header</span> {
    <span class="prop">display:</span> <span class="value">flex</span>;
    <span class="prop">justify-content:</span> <span class="value">space-between</span>;
}`,


`

<span class="comment">/**
 * Pas terrible pour le moment.
 */</span>`,


`

<span class="selector">body</span> {
    <span class="prop">color:</span> <span class="value">white</span>;
}`,


`

<span class="selector">#nom_site</span> {
    <span class="prop">transform:</span> <span class="value">rotate(-20deg)</span>;
    <span class="prop">width:</span> <span class="value">15vw</span>;
    <span class="prop">margin-left:</span> <span class="value">0.5vw</span>;
    <span class="prop">font-family:</span> <span class="value">"above"</span>;
}`,

`

<span class="comment">/**
 * Bon, c'est un début.
 * Maintenant je vous propose d'ajouter un lien vers mon Github.
 * (Je vous passe la partie HTML).
 */</span>`,

`


<span class="comment">/**
 * Quelques ajustements à faire, en particulier pour la couleur.
 */</span>`,

`

<span class="selector">#logo > a > img</span> {
    <span class="prop">margin:</span> <span class="value">20px 10px 0 0</span>;
    <span class="prop">filter:</span> <span class="value">invert(100%)</span>;
}`,

`

<span class="selector">img:hover</span> {
    <span class="prop">opacity:</span> <span class="value">0.5</span>;
}
`,

`

<span class="comment">/**
 * Notre site prend forme !
 * Cependant tout ça manque encore de contenu.
 */</span>`,

`

<span class="comment">/**
 * Il va falloir faire un peu de place.
 */</span>`,

`

<span class="selector">pre</span> {
    <span class="prop">left:</span> <span class="value">75%</span>;
    <span class="prop">height:</span> <span class="value">50vh</span>;
}`,

`

<span class="comment">/**
 * Hm...Attendez j'ai une meilleure idée.
 * 
 * Par contre je vous préviens ça risque de secouer un peu.
 */</span>`,

 `

<span class="selector">#flexbox</span>{
    <span class="prop">display:</span> <span class="value">flex</span>;
    <span class="prop">width:</span> <span class="value">100%</span>;
    <span class="prop">justify-content:</span> <span class="value">space-between</span>;
    <span class="prop">margin-top:</span> <span class="value">5vh</span>;
}`,

`

<span class="selector">#exp</span> {
    <span class="prop">margin:</span> <span class="value">1vw</span>;
    <span class="prop">width:</span> <span class="value">45vw</span>;
    <span class="prop">background-color:</span> <span class="value">#111</span>;
    <span class="prop">height:</span> <span class="value">50vh</span>;
}`,

`

<span class="selector">pre</span> {
    <span class="prop">margin:</span> <span class="value">1vw</span>;
    <span class="prop">transform:</span> <span class="value">translate(0, 0)</span>;
    <span class="prop">position:</span> <span class="value">relative</span>;
    <span class="prop">top:</span> <span class="value">0%</span>;
    <span class="prop">left:</span> <span class="value">0%</span>;
}`,

`

<span class="comment">/**
 * Voilà ! C'était pas si terrible finalement
 *
 * Reste encore à savoir quoi mettre dans cette boite...
 * 
 * Ajoutons un titre dans un premier temps.
 */</span>`,

 `
 
<span class="selector">h2</span> {
    <span class="prop">text-align:</span> <span class="value">center</span>;
    <span class="prop">font-family:</span> <span class="value">'above'</span>;
}`,

`

<span class="comment">/**
 * Pour ceux qui se demandent ce qu'est un Quine,
 * c'est ce qui se passe actuellement.
 * Pour plus d'informations vous pouvez cliquer <a href="http://www.madore.org/~david/computers/quine.html" target="_blank">ici</a>.
 */</span>`,

 `
 
<span class="comment">/**
 * Désolé si je vais un peu vite mais il y a pas mal
 * de travail à faire !
 * 
 * TODO: L'utilisateur peut choisir sa vitesse
 */</span>`,

 `
 
<span class="comment">/**
 * Ajoutons une image pour que ça soit moins terne.
 */</span>`,

 `
 
<span class="selector">.head-exp</span> {
    <span class="prop">display:</span> <span class="value">flex</span>;
    <span class="prop">justify-content:</span> <span class="value">center</span>;
    <span class="prop">height:</span> <span class="value">70px</span>;
}`,

`

<span class="selector">#science</span> {
    <span class="prop">margin:</span> <span class="value">5px</span>;
    <span class="prop">transform:</span> <span class="value">rotate(30deg)</span>;
}`,

`

<span class="comment">/**
 * Ça avance, on est loin de la page blanche du début.
 * 
 * Maintenant il va falloir faire un peu de préparation
 * avant la rédaction
 */</span>`,

`

<span class="selector">#exp</span> {
    <span class="prop">display:</span> <span class="value">grid</span>;
    <span class="prop">grid-template-rows:</span> <span class="value">repeat(3, 1fr)</span>;
}`,

`

<span class="comment">/**
 * C'est prêt, maitenant place à la rédaction.
 * Je fais vite restez là, je reviens.
 */</span>`,

 `
 
<span class="comment">/**
 * Je vous avais dit que ça serait rapide.
 * 
 * On y est presque.
 */</span>`,

 `

<span class="selector">.project</span> {
    <span class="prop">display:</span> <span class="value">flex</span>;
    <span class="prop">align-items:</span> <span class="value">center</span>;
    <span class="prop">justify-content:</span> <span class="value">space-around</span>;
}`,

`

<span class="selector">.project:hover</span> {
    <span class="prop">background-color:</span> <span class="value">#313131</span>;
}`,


`

<span class="selector">.project-content</span> {
    <span class="prop">font-family:</span> <span class="value">'helvetica'</span>;
    <span class="prop">text-align:</span> <span class="value">center</span>;
}`,

`

<span class="selector">a</span> {
    <span class="prop">color:</span> <span class="value">#008cb2</span>;
}`,

`

<span class="comment">/**
 * Ajoutons un logo pour chaque expérience.
 * 
 * Tout ça me semble plutôt bien.
 * 
 * On pourra toujours ajouter du contenu plus tard
 */</span>`,

`
 
<span class="comment">/**
 * Ce site manque d'un moyen de contact.
 * 
 * Laissez moi faire.
 */</span>`,


`

<span class="selector">footer</span> {
    <span class="prop">position:</span> <span class="value">absolute</span>; 
    <span class="prop">bottom:</span> <span class="value">0</span>;
    <span class="prop">width:</span> <span class="value">100%</span>;
}`,

`

<span class="selector">#contact</span> {
    <span class="prop">text-align:</span> <span class="value">center</span>;
}`,

`

<span class="selector">hr</span> {
    <span class="prop">width:</span> <span class="value">20%</span>;
}`,

`

<span class="comment">/**
 * Le site est enfin prêt !
 * 
 * Pour les curieux c'est du pur JavaScript.
 * 
 * J'ai découvert ce principe grâce à Samuel Reed,
 * qui l'a lui même découvert grâce à Jake Albaugh,
 * merci à eux.
 * 
 * Tout le code JS est écrit par mes soins sans aucune reprise
 * d'un code existant ou d'une librairie externe.
 * 
 * 
 * Ps: Vous pouvez scroll vers le haut pour revoir le code.
 */</span>`


]


let signature = String.raw `
 _    _       _            _        _       _     
| |  | (_)   | |          (_)      | |     | |    
| |__| |_  __| | __ _ _ __ _ ______| | __ _| |__  
|  __  | |/ _' |/ _' | '__| |______| |/ _' | '_ \ 
| |  | | | (_| | (_| | |  | |      | | (_| | |_) |
|_|  |_|_|\__,_|\__,_|_|  |_|      |_|\__,_|_.__/ `

//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================




let fullContent = `/**
 * Bienvenue sur Hidari-lab !
 * Je suis un développeur NodeJs, React & Symfony,
 * mais pour cette fois je vous laisse avec mon robot.
 */

/**
 * Robot rights protected under BOT License
 * Starting bot.....
 * 
 * Hey, bienvenue.
 * 
 * C'est moi Robot2H.
 * 
 * J'étais justement en train de générer un nouveau site.
 * 
 * Vous pouvez regarder si vous voulez.
 * 
 */

/**
 * Commençons par un fond un peu plus sombre.
 */

body {
    background-color: #161616;
}

/**
 * Oups désolé, je vous avais déjà oublié.
 */

pre {
    color: white;
}

/**
 * C'est plus clair comme ça non ?
 * Essayons de rendre le texte encore plus lisible.
 */

.comment { color: #888; font-style: italic}
.selector { color: #E69F0F}
.prop { color: #64D5EA}
.value {color: #BE84F2}

/**
 * Parfait !
 */

/**
 * Une dernière chose pour mettre en place notre plan de travail
 */

pre {
    height: 40vh;
    background-color: #111;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 45vw;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/**
 * Bien, nous voila enfin prêt pour passer aux choses sérieuses.
 * Commençons par décrire l'identité du site avec tout simplement...
 * Le nom du site.
 */

header {
    display: flex;
    justify-content: space-between;
}

/**
 * Pas terrible pour le moment.
 */

body {
    color: white;
}

#nom_site {
    transform: rotate(-20deg);
    width: 15vw;
    margin-left: 0.5vw;
    font-family: "above";
}

/**
 * Bon, c'est un début.
 * Maintenant je vous propose d'ajouter un lien vers mon Github.
 * (Je vous passe la partie HTML).
 */

/**
 * Quelques ajustements à faire, en particulier pour la couleur.
 */

#logo > a > img {
    margin: 20px 10px 0 0;
    filter: invert(100%);
}

img:hover {
    opacity: 0.5;
}

/**
 * Notre site prend forme !
 * Cependant tout ça manque encore de contenu.
 */

/**
 * Il va falloir faire un peu de place.
 */

pre {
    left: 75%;
    height: 50vh;
}

/**
 * Hm...Attendez j'ai une meilleure idée.
 * 
 * Par contre je vous préviens ça risque de secouer un peu.
 */

#flexbox{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5vh;
}

#exp {
    margin: 1vw;
    width: 45vw;
    background-color: #111;
    height: 50vh;
}

pre {
    margin: 1vw;
    transform: translate(0, 0);
    position: relative;
    top: 0%;
    left: 0%;
}

/**
 * Voilà ! C'était pas si terrible finalement.
 * 
 * Reste encore à savoir quoi mettre dans cette boite...
 * 
 * Ajoutons un titre dans un premier temps.
 */ 

h2 {
    text-align: center;
    font-family: 'above';
}

/**
 * Pour ceux qui se demandent ce qu'est un Quine,
 * c'est ce qui se passe actuellement.
 * Pour plus d'informations vous pouvez cliquer ici.
 */

/**
 * Désolé si je vais un peu vite mais il y a pas mal
 * de travail à faire !
 * 
 * TODO: L'utilisateur peut choisir sa vitesse
 */

/**
 * Ajoutons une image pour que ça soit moins terne.
 */

.head-exp {
    display: flex;
    justify-content: center;
    height: 70px;
}

#science {
    margin: 5px;
    transform: rotate(30deg);
}

/**
 * Ça avance, on est loin de la page blanche du début.
 * 
 * Maintenant il va falloir faire un peu de préparation
 * avant la rédaction
 */

#exp {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
}

/**
 * C'est prêt, maitenant place à la rédaction.
 * Je fais vite restez là, je reviens.
 */

/**
 * Je vous avais dit que ça serait rapide.
 * 
 * On y est presque.
 */

.project {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.project:hover {
    background-color: #313131;
}

.project-content {
    font-family: 'helvetica';
    text-align: center;
}

a {
    color: #008cb2;
}

/**
 * Ajoutons un logo pour chaque expérience.
 * 
 * Tout ça me semble plutôt bien.
 * 
 * On pourra toujours ajouter du contenu plus tard
 */

/**
 * Ce site manque d'un moyen de contact.
 * 
 * Laissez moi faire.
 */

footer {
    position: absolute; 
    bottom: 0;
    width: 100%;
}

#contact {
    text-align: center;
}

hr {
    width: 20%;
}

/**
 * Le site est enfin prêt !
 * 
 * Pour les curieux c'est du pur JavaScript.
 * 
 * J'ai découvert ce principe grâce à Samuel Reed,
 * qui l'a lui même découvert grâce à Jake Albaugh,
 * merci à eux.
 * 
 * Tout le code JS est écrit par mes soins sans aucune reprise
 * d'un code existant ou d'une librairie externe.
 * 
 * Ps: Vous pouvez scroll vers le haut pour revoir le code.
 */` + signature

 let project = [`Vlight - Outil de gestion des performances, en temps réel, de serveurs dédiés, VPS, server-less`,
  `Site web sous Symfony pour des associations, back-office et carte interactive avec géolocalisation`,
    `Des bots pour Discord, Slack, Twitch. Gestion des utilisateurs et utilisation d'API externe`]