const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const MovieDetailsData = document.getElementById("MainContainerDetails");
let movieID = location.search.split("=")[1];

function getMovieDetails(id){
    MovieDetailsData.innerHTML="";
    let MovieURL = `${url}/movie/${id}?api_key=d300b115836f400905989e06862d28d2`;
    fetch(MovieURL).then((res)=>res.json()).then((data)=>{
      const {title,poster_path,overview,release_date,runtime,vote_average,status,tagline} = data;
      console.log(title);
      const MovieDataElement = document.createElement("div");
      MovieDataElement.classList.add("MainContainerDetails");
      MovieDataElement.innerHTML = `
      <div id="MovieDetails">
      <img src="${imgPath + poster_path}" alt="movie1">
      <div class="Details">
            <h1>${title}</h1>
            <p>${overview}</p>
            <p>${tagline}</p>
            <div class="SmallDetails">
                <h2>Release Date : ${release_date}</h2>
                <h2>RunTime : ${runtime} Minutes</h2>
                <h2>Rating : ${vote_average}</h2>
                <h2>Status : ${status}</h2>
            </div>
        </div>
      </div>`;
      MovieDetailsData.appendChild(MovieDataElement);
    });
  }
getMovieDetails(movieID);