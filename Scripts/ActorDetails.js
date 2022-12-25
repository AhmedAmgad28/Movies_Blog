const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const ActorDetailsData = document.getElementById("MainContainerDetails");
let ActorID = location.search.split("=")[1];

function getActorDetails(id){
    ActorDetailsData.innerHTML="";
    let ActorURL = `${url}/person/${id}?api_key=d300b115836f400905989e06862d28d2`;
    fetch(ActorURL).then((res)=>res.json()).then((data)=>{
      const {name,profile_path,biography,place_of_birth,birthday} = data;
      const ActorDataElement = document.createElement("div");
      ActorDataElement.classList.add("MainContainerDetails");
      ActorDataElement.innerHTML = `
      <div id="MovieDetails">
      <img src="${imgPath + profile_path}" alt="movie1">
      <div class="Details">
            <h1>${name}</h1>
            <p>${biography}</p>
            <div class="SmallDetails">
                <h2>Country : ${place_of_birth}</h2>
                <h2>Birthday : ${birthday}</h2>
            </div>
        </div>
      </div>`;
      ActorDetailsData.appendChild(ActorDataElement);
    });
  }
getActorDetails(ActorID);