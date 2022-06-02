console.log("connected!")

let gitHubUrl = "https://api.github.com/users/racheldk"

fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/JSON' },
})
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data.name)
    })