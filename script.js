// TODO: add code here
window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
       const destination = document.getElementById("destination");
      // console.log(json);

      let htmlOut = "";
       for(let astronauts of json){
           htmlOut += `<div class="astronaut">
           <div class="bio">
           <h3>${astronauts.firstName} ${astronauts.lastName} </h3>
           <ul>
            <li>Hours in space: ${astronauts.hoursInSpace}</li>
            <li>Active: ${astronauts.active}</li>
            <li>Skills: ${astronauts.skills}</li>
         </ul>
         </div>
         <img class ="avatar" src="https://handlers.education.launchcode.org/static/images/${(astronauts.firstName).toLowerCase()}-${(astronauts.lastName).toLowerCase()}.jpg" />
         </div>
           `
       }
       container.innerHTML = htmlOut;
        });
    });
 });