

const hercule = {
    name : "Hercule",
    job : "Demi-dieu",
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true,
};
const travaux = 11;
const friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];


base.fillProfil(hercule);
base.printFriends(friends);
base.setBestFriend(friends[0]);


const titre = document.createElement("h1");
titre.classList.add("banner_title");
titre.textContent=("Vous êtes sur le profil de Hercule");
let putIn= document.querySelector("#header-banner");
putIn.appendChild(titre);

for (let i = 0; i <travaux; i++){
    base.displayWork(i);
}

let isHeHere = () => {
    let availability = base.getHour();
    console.log (availability);
    let available = document.querySelector("#availability");
    available.classList.add("off");
    if(availability >= 8 && availability < 20){
        available.textContent=("Disponible");
        available.classList.remove("off");
    } else if (availability  < 8 && availability >= 20){
        available.textContent =("Non disponible");
    }
};

isHeHere();

function pseudo(name, department) {
    let pseudoconca= `${name}-du-${department}`;
    return pseudoconca;
}
let pseudonyme= document.querySelector("#profil-name");
pseudonyme.innerHTML= (pseudo(hercule.name, hercule.department));


let navigation = document.querySelector("#menu-toggler");
navigation.addEventListener("click", Nav);
function Nav (){
    if(putIn.classList.contains("banner--open")){
        putIn.classList.remove("banner--open");}
    else if (putIn.classList.contains("banner")){
        putIn.classList.add("banner--open");
    }
}


let nocontact= document.querySelector("#contact");
nocontact.addEventListener("submit", NoSubm);

function NoSubm(event){
    event.preventDefault;
    alert("Hercule ne souhaite pas être dérangé");
}

let vote = ()=>{
    
    let valeurTotale = base.vote.hercule + base.vote.cesar;
    let larityHercule = Math.round((base.vote.hercule / valeurTotale) *100);
    let larityCesar =Math.round((base.vote.cesar / valeurTotale) *100);
    let voteForHercule = document.querySelector("#trends-hercule");
    let herculeEnPourcent= voteForHercule.querySelector(".people__popularity");
    herculeEnPourcent.textContent=(larityHercule + " %");
    let voteForCesar = document.querySelector("#trends-cesar");
    let cesarEnPourcent = voteForCesar.querySelector(".people__popularity");
    cesarEnPourcent.textContent=(larityCesar + " %");
    voteForHercule.querySelector(".people__bar").style.width = larityHercule +"%";
    voteForCesar.querySelector(".people__bar").style.width = larityCesar + "%";
};

vote();

function Activite(){
    let activite=document.querySelector("#activities");
    let tasks = activite.querySelector(".tasks");
    activite.classList.remove("hidden");
    for (let i = 0 ; i< base.activities.length; i++){
        if (base.activities[i].author === "Hercule" && base.activities[i].finished === true){
            let ajout= document.createElement("li");
            ajout.textContent=(base.activities[i].title);
            tasks.appendChild(ajout);
        }
    }
}


Activite();