console.log('connected!');
const page = document.querySelector('#profile')
const heading = document.querySelector('#heading')
const contact = document.querySelector('#contact')
const repoList = document.querySelector('#repo_list')
const url = document.querySelector("#url")

//fetch for profile data 
fetch("https://api.github.com/users/racheldk", {
    method: "GET",
    headers: {"Content-Type": "application/JSON"},
})
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data + "profile data received")
        //add functions here 
        addAvatar(data)
        addName(data)
        addLocation(data)
        addGitUrl(data)
        addUserName(data)
    })
    
    //function to add name to header
    function addName(data){
        let nameEl = document.createElement('h1')
        nameEl.classList.add("heading")
        nameEl.innerText = `${data.name}`
        console.log("addName")
        heading.appendChild(nameEl)
    }

    //function to add avatar image to header
    function addAvatar(data) {
        let avatarEl = document.createElement('img')
        avatarEl.classList.add("img")
        avatarEl.src = data.avatar_url
        avatarEl.alt = `${data.name}'s avatar`
        console.log("addAvatar")
        heading.appendChild(avatarEl)
    }

    //function to add location to contact 
    function addLocation(data) {
        let locationEl = document.createElement('p')
        locationEl.classList.add("contact")
        locationEl.innerText = `Location: ${data.location}`
        console.log("addLocation")
        contact.appendChild(locationEl)
    }
    
    //function to add GitHub url to contact 
    function addGitUrl(data) {
        let gitUrlEl = document.createElement('a')
        gitUrlEl.classList.add("contact")
        gitUrlEl.innerText = `${data.url}`
        gitUrlEl.href = data.url
        console.log("addGitUrl")
        url.appendChild(gitUrlEl)
    }
    
    //function to GitHub username to contact 
    function addUserName(data) {
        let userNameEl = document.createElement('p')
        userNameEl.classList.add("contact")
        userNameEl.innerText = `GitHub username: ${data.login}`
        console.log("addUserName")
        contact.appendChild(userNameEl)
    }
    
    //function to add repos to repo_list ul 
    //add all of the functions to the fetch 
    

    //fetch the repo array from the repos url
    repoUrl = "https://api.github.com/users/racheldk/repos"
    fetch(repoUrl, {
        method: "GET",
        headers: { "Content-Type": "application/JSON"},
    })
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log("got the repo data from the API")
            console.log(data)
            //do a bunch of functions
            addRepo(data)
        })

function addRepo(repoData){
    repoNameArray = repoData.map(function (repo){
        repoList.appendChild(makeRepoEl(repo.name))
    })
}

function makeRepoEl(repoName) {
    let repoLi = document.createElement('p')
    repoLi.classList.add("m10")
    let repoEl = document.createElement('a')
    repoEl.classList.add("repo")
    repoEl.innerText = `${repoName}`
    repoEl.href = repoName
    console.log(repoName)
    repoLi.appendChild(repoEl)
    repoList.appendChild(repoLi)
    return repoLi
}