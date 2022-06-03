console.log('connected!');
const page = document.querySelector('#profile')
const heading = document.querySelector('#heading')
const contact = document.querySelector('#contact')
const repoList = document.querySelector('#repo_list')

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
        addName(data)
        addAvatar(data)
        addLocation(data)
    })
    
    //function to add name to header
    function addName(data){
        let nameEl = document.createElement('h1')
        nameEl.classList.add("f4")
        nameEl.innerText = `${data.name}`
        heading.appendChild(nameEl)
    }

    //function to add avatar image to header
    function addAvatar(data) {
        let avatarEl = document.createElement('img')
        avatarEl.classList.add("br-100", "h4", "w4", "dib")
        avatarEl.src = data.avatar_url
        avatarEl.alt = `${data.name}'s avatar`
        heading.appendChild(avatarEl)
    }

    //function to add location to contact 
    function addLocation(data) {
        let locationEl = document.createElement('p')
        locationEl.classList.add("lh-copy", "measure", "center", "f6", "black-70")
        locationEl.innerText = `${data.location}`
        contact.appendChild(locationEl)
    }
    
    //function to add GitHub url to contact 
    
    
    //function to GitHub username to contact 
    
    
    //add header to page 
    
    
    //add contact to page 
    
    
    //function to add repos to repo_list ul 
    
    
    //add all of the functions to the fetch 
    
    
    //just do one fetch from the repos url
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
        })