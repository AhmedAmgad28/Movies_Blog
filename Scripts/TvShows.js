//https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=d300b115836f400905989e06862d28d2
//Generating Url
const apiKey = "&api_key=d300b115836f400905989e06862d28d2";
const url = "https://api.themoviedb.org/3";
const path = "/discover/tv?sort_by=vote_count.desc";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const apiUrl = url + path + apiKey;

const mainTV = document.getElementById("Tvshows");
getShows(apiUrl);

//Get Data from api 
function getShows(Url){
  fetch(Url).then((res) => res.json())
  .then((data)=>{
    showTv(data.results);
  });
}

//Show data in the required position
function showTv(data){
  mainTV.innerHTML="";   //emptying the div that will be filled with data
  data.forEach(TVShow => {
    const {original_name,poster_path} = TVShow;    
    const TvShowElement = document.createElement("div");    //Create Element
    TvShowElement.classList.add("CardTv");    //Add Class to the element
    TvShowElement.innerHTML = `<img src="${imgPath + poster_path}" alt="TvShow1">
        <h2 id="Name">${original_name}</h2>`;

    mainTV.appendChild(TvShowElement);
  });
}