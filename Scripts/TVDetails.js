const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const tvDetailsData = document.getElementById("MainContainerDetails");
let TVShowID = location.search.split("=")[1];

function getTVDetails(id){
    tvDetailsData.innerHTML="";
    let TVURL = `${url}/tv/${id}?api_key=d300b115836f400905989e06862d28d2`;
    fetch(TVURL).then((res)=>res.json()).then((data)=>{
      const {original_name,poster_path,overview,first_air_date,number_of_seasons,vote_average,status,tagline} = data;
      const TVDataElement = document.createElement("div");
      TVDataElement.classList.add("MainContainerDetails");
      TVDataElement.innerHTML = `
      <div id="MovieDetails">
      <img src="${imgPath + poster_path}" alt="movie1">
      <div class="Details">
            <h1>${original_name}</h1>
            <p>${overview}</p>
            <p>${tagline}</p>
            <div class="SmallDetails">
                <h2>First Air Date : ${first_air_date}</h2>
                <h2>Number of seasons : ${number_of_seasons}</h2>
                <h2>Rating : ${vote_average}</h2>
                <h2>Status : ${status}</h2>
            </div>
        </div>
      </div>`;
      tvDetailsData.appendChild(TVDataElement);
    });
  }
getTVDetails(TVShowID);