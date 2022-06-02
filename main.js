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
        console.log(data.name)
        buildProfile(data.name)
    })

   function buildProfile(profileData) {
       let nameElement = document.createElement('h1')
       nameElement.classList.add('profileCard')
       nameElement.innerText = `${profileData}` 
       console.log(`function ${nameElement.innerText}`)
       page.appendChild(nameElement) 
   }

   
