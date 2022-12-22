//API Key = d300b115836f400905989e06862d28d2
//url = https://api.themoviedb.org/3
//path = /trending/movie/week?

//Generating Url
const apiKey = "api_key=d300b115836f400905989e06862d28d2";
const url = "https://api.themoviedb.org/3";
const path = "/trending/movie/week?";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const apiUrl = url + path + apiKey;

const main = document.getElementById("Movies");
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
  main.innerHTML="";    //emptying the div that will be filled with data
  data.forEach(movie => {
    const {title,poster_path} = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("Card");
    movieElement.innerHTML = `<img src="${imgPath + poster_path}" alt="Movie1">
        <h2 id="Name">${title}</h2>`;

    main.appendChild(movieElement);
  });
}