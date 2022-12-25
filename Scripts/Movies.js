//Generating Url
const apiKey = "&api_key=d300b115836f400905989e06862d28d2";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=vote_count.desc";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const apiUrl = url + path + apiKey;

const mainM = document.getElementById("Moviespage");
getMovies(apiUrl);

//Get Data from api 
function getMovies(Url){
  fetch(Url).then((res) => res.json())
  .then((data)=>{
    showMovie(data.results);
  });
}

//Show data in the required position
function showMovie(data){
  mainM.innerHTML="";    //emptying the div that will be filled with data
  data.forEach(movie => {
    const {title,poster_path,id} = movie;
    const movieElement = document.createElement("div");   //Create Element
    movieElement.classList.add("CardMovie");    //Add Class to the element
    movieElement.innerHTML = `<a href="/Pages/MovieDetails.html?id=${id}">
    <img src="${imgPath + poster_path}" alt="Movie1">
    <h2 id="Name">${title}</h2></a>`;

    mainM.appendChild(movieElement);
  });
}