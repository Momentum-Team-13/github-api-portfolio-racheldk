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
  avatarElement.classList.add("br-100", "h6", "w6", "dib");
  avatarElement.src = profileData.avatar_url;
  avatarElement.alt = "the user's avatar";
  console.log("loadAvatar");
  page.appendChild(avatarElement);

  //add location to page
  let locationElement = document.createElement("div");
  locationElement.innerText = `Location: ${profileData.location}`;
  page.appendChild(locationElement);

  //add GitHub url to page
  let urlElement = document.createElement("a");
  urlElement.innerText = `GitHub URL: ${profileData.url}`;
  urlElement.href = profileData.url;
  page.appendChild(urlElement);

  //add GitHub username to page
  let userNameElement = document.createElement("div");
  userNameElement.innerText = `GitHub username: ${profileData.login}`;
  page.appendChild(userNameElement);
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
    buildReposLoop(data);
  });



function buildReposLoop(profileData) {
  //this function will use input called "profileData"
  for (let repo of profileData) {
    //this is a loop that will do the things specified below to each object "repo" inside of the array "profileData" - we know this is an array because the url we're using to fetch from takes us to an array of objects
    let buildRepoElementResult = buildRepoElement(repo.name);
    console.log(buildRepoElementResult);
    page.appendChild(buildRepoElementResult);
    //"repo.name" the name key of the repo object
    //buildRepoElement calls the function, which we have made elsewhere
    //page.appendChild adds thing the function returned as a child onto the profile element that already exists in the html
  }
}

function buildRepoElement(repoName) {
  //this function will use input we're calling "repoName". we have called this function in the function buildReposLoop
  let el = document.createElement("a");
  //make a <p> in the html that we will call "el"
  el.innerText = repoName;
  //make the <p> called "el"'s innertext whatever input we put into the function
  el.href = repoName;
  return el;
  //return shoots this el out of the function so we can grab it and use it elsewhere
}

//STYLING FROM TACHYONS
//   <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
//   <div class="tc">
//     <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
//     <h1 class="f4">Mimi Whitehouse</h1>
//     <hr class="mw3 bb bw1 b--black-10">
//   </div>
//   <p class="lh-copy measure center f6 black-70">
//     Quite affectionate and outgoing.
//     She loves to get chin scratches and will
//     roll around on the floor waiting for you give her more of them.
//   </p>
// </article


// tachyons for lists
{/* <article class="pa3 pa5-ns">
  <h1 class="f4 bold center mw6">Cats</h1>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
    <li class="ph3 pv3 bb b--light-silver">Mackeral Tabby</li>
    <li class="ph3 pv3 bb b--light-silver">Burmese</li>
    <li class="ph3 pv3 bb b--light-silver">Orange Tabby</li>
    <li class="ph3 pv3 bb b--light-silver">Maine Coon</li>
    <li class="ph3 pv3 bb b--light-silver">Siamese</li>
    <li class="ph3 pv3 bb b--light-silver">Scottish Fold</li>
    <li class="ph3 pv3">American Bobtail</li>
  </ul>
</article> */}