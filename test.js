console.log("connected! woo!")
let profile = document.querySelector('#profile')

// started in insomnia, so we could see things. but now we're going to get javascript to do the thing insomnia was doing 

let gitHubUrl = "https://api.github.com/users/racheldk/repos"
//could also put this right into your fetch request, but this makes it more readable 

//fetch comes for free with js
fetch(gitHubUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
    .then(function(response) {
        //the response is the promised data 
        return response.json()
        //put the reponse in JSON format

    })
    .then(function (data) { 
    //data refers to what the above promise returned (response.json()). it's a multi-step process: you get the response, turn it into json, then you can work with it
    //data.name would give you  just the value of the name key from the API
    buildProfile(data)
    })
    // this is pretty boiler-plate. 

    // function buildProfile(profileData){
    //     console.log(profileData)
    //     //create elements and add them to the page
    //     //profileData is the data from the promise
    //     //making this separate function (that you then call in the fetch) will be a little easier to read and keep track of today
    // }


    //afternoon class MAPS
    function buildProfile(profileData) {
        names = profileData.map(function (repo) {
            return repo.name 
        })
        console.log(names)
        elements = names.map(function (name){
            return buildRepoElement(name)
        })
        console.log("elements", elements)
        for (let element of elements) {
            profile.appendChild(element)
        }
    }


    function buildRepoElement(name){
        let el = document.createElement('p')
        el.innerText=name 
        return el
        //returns a new element for a repo, like a customer
    }