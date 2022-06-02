console.log("connected!")
const page = document.querySelector('#profile')

let gitHubUrl = "https://api.github.com/users/racheldk"


fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/JSON' },
})
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
        buildProfile(data)
    })

    function buildProfile(profileData) {
        let nameElement = document.createElement('h1')
        nameElement.classList.add('profileCard')
        nameElement.innerText = `${profileData.name}` 
        console.log(`function ${nameElement.innerText}`)
        page.appendChild(nameElement) 

        let avatarElement = document.createElement('img')
            avatarElement.src = profileData.avatar_url
            avatarElement.alt = "the user's avatar"
            console.log('loadAvatar')
            page.appendChild(avatarElement)
    }   


//add Location 
fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data){
        addLocation(data.location)
    })

function addLocation(location) {
    let locationElement = document.createElement('div')
    locationElement.innerText = `Location: ${location}`
    page.appendChild(locationElement)
}    

//add GitHub URL
fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        addGitUrl(data.url)
    })

    function addGitUrl(gitUrl) {
        let urlElement = document.createElement('div')
        urlElement.innerText = `GitHub URL: ${gitUrl}`
        page.appendChild(urlElement)
    }


//add repos
const repoUrl = "https://api.github.com/users/racheldk/repos"
fetch(repoUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/JSON'},
})    
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        addRepos(data.html_url)
    })

    function addRepos(reposName){
        for (let repo of repos){
            let repoElement = document.createElement('div')
            repoElement.innerText = repo
            page.appendChild(repoElement)
        }
    }