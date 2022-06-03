console.log("connected!");
const page = document.querySelector("#profile");

let gitHubUrl = "https://api.github.com/users/racheldk";

//PROFILE INFO
//get profile data from API
fetch(gitHubUrl, {
  method: "GET",
  headers: { "Content-Type": "application/JSON" },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //run the function buildProfile with the data you just got from the API
    buildProfile(data);
  });

function buildProfile(profileData) {
    //adds name to page
  let nameElement = document.createElement("h1");
  nameElement.classList.add("profileCard");
  nameElement.innerText = `${profileData.name}`;
  console.log(`function ${nameElement.innerText}`);
  page.appendChild(nameElement);

  //add avatar image to page
  let avatarElement = document.createElement("img");
  avatarElement.src = profileData.avatar_url;
  avatarElement.alt = "the user's avatar";
  console.log("loadAvatar");
  page.appendChild(avatarElement);

//add location to page
  let locationElement = document.createElement("div");
  locationElement.innerText = `Location: ${profileData.location}`;
  page.appendChild(locationElement);

  //add GitHub url to page
  let urlElement = document.createElement("div");
  urlElement.innerText = `GitHub URL: ${profileData.url}`;
  page.appendChild(urlElement);
}


//REPOS
const repoUrl = "https://api.github.com/users/racheldk/repos";
//fetch repos
fetch(repoUrl, {
  method: "GET",
  headers: { "Content-Type": "application/JSON" },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  buildReposLoop(data)
  });

//   function buildRepos(repoData){
//       repoArray = []
//       repoArray.push()//all of the array names//
//       //turn each repo from repoArray into it's own element 
//       //also make them into clickable links instead of just regular urls?
//       //add each element to an existing element on the page 
//   }

  function buildReposLoop(profileData) {  
      //this function will use input called "profileData"
      for (let repo of profileData) {
        //this is a loop that will do the things specified below to each object "repo" inside of the array "profileData" - we know this is an array because the url we're using to fetch from takes us to an array of objects 
        page.appendChild(buildRepoElement(repo.name))
        //"repo.name" the name key of the repo object 
        //buildRepoElement calls the function, which we have made elsewhere
        //page.appendChild adds thing the function returned as a child onto the profile element that already exists in the html
      }
  }

  function buildRepoElement(repoName){
      //this function will use input we're calling "repoName". we have called this function in the function buildReposLoop
      let el = document.createElement('p')
      //make a <p> in the html that we will call "el"
      el.innerText = repoName;
      //make the <p> called "el"'s innertext whatever input we put into the function 
      return el
      //NOT SUPER SURE WHAT THIS IS DOING 

  }


