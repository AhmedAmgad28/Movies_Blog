//https://api.themoviedb.org/3/person/popular?api_key=d300b115836f400905989e06862d28d2

//Generating Url
const apiKey = "api_key=d300b115836f400905989e06862d28d2";
const url = "https://api.themoviedb.org/3";
const path = "/person/popular?";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const apiUrl = url + path + apiKey;

const mainActor = document.getElementById("Actors");
getShows(apiUrl);

//Get Data from api 
function getShows(Url){
  fetch(Url).then((res) => res.json())
  .then((data)=>{
    showActor(data.results);
  });
}

//Show data in the required position
function showActor(data){
  mainActor.innerHTML="";       //emptying the div that will be filled with data
  data.forEach(people => {
    const {name,profile_path,id} = people;
    const ActorElement = document.createElement("div");
    ActorElement.classList.add("CardActor");
    ActorElement.innerHTML = `<a href="/Pages/ActorDetails.html?id=${id}">
        <img src="${imgPath + profile_path}" alt="Actor1">
        <h2 id="Name">${name}</h2></a>`;

    mainActor.appendChild(ActorElement);
  });
}