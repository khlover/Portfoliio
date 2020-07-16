let Projectgap = document.getElementById("Projects")
let jskill = document.getElementById("js")
let rskill = document.getElementById("react")
let vskill = document.getElementById("vue")

var projects = [{

    name: "Black Jack",
    img: "bjThumb.PNG",
    desc: 
    `<div class="pdesc">
    <ul>
    <li>Real drawing and shuffling by randomizing card array</li> </br>
    <li>Aces automatically count as best possible value </li> </br>
    <li>Blackjacks end the round automatically</li> </br>
    <li>Dealer wins draws</li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/Vue---Blackjack/",
    code: "https://github.com/khlover/Vue---Blackjack",
    tools: ["VUE","JS","CSS","HTML"]
}, 
{
    name: "Game Collection",
    img: "gamesThumb.PNG",
    desc: `<div class="pdesc">
    <ul>
    <li>Google firebase authentication</li> </br>
    <li>Users can only see their own games</li> </br>
    <li>Serverless database for game information</li> </br>
    <li>Grid design for displaying games</li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/GameCollection/",
    code: "https://github.com/khlover/GameCollection",
    tools: ["JS","CSS","HTML","Firebase"]

},{

    name: "Mail Search",
    img: "mailThumb.PNG",
    desc: `<div class="pdesc">
    <ul>
    <li>UI mockup of modern email client</li> </br>
    <li>Select date range</li> </br>
    <li>Open multiple emails at once</li> </br>
    <li>Alternative design for mobile</li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/MailArchiver",
    code: "https://github.com/khlover/MailArchiver",
    tools: ["JS","CSS","HTML"]
}
]




function sortbytype(e){
    e = e || window.event;
    e = e.target || e.srcElement;
    console.log(e.id);
    jskill.style.opacity = 0.5
    rskill.style.opacity = 0.5
    vskill.style.opacity = 0.5
    chosen = document.getElementById(e.id).style.opacity = 1;
  
    

    while (Projectgap.hasChildNodes()){
        Projectgap.removeChild(Projectgap.firstChild);
    }

    projects.forEach(project =>{

        if(project.tools.includes(e.id.toUpperCase())){
            console.log("gotem")
           const newdiv = document.createElement('div')

           let div = 
           `
                <div class = "project">
                <h2 class="pname">${project.name}</h2>
                <img id="icon" height="290px" width="450px" src=${project.img}>
                <span>
                    <a href=${project.live} target="blank"> <button>Live</button></a>
                    <a href=${project.code} target="blank"> <button>Code</button></a>
                </span> 
                ${project.desc}
                </div>
           `
           
                let temp = `<span id="tags">`
             project.tools.forEach(e =>
                {
                    temp += `<p class="tag"> ${e} </p>`
                })
                temp += `</span>`

           newdiv.innerHTML = div += temp
           Projectgap.appendChild(newdiv)
        }
        
        
    })


}