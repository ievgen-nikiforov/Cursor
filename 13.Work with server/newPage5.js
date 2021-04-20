
function planetList(){
    fetch('https://swapi.dev/api/planets/?page=6')
     .then((response) => {
         return response.json();
     })
     .then((data) => {
         const planetList = [];
        data.results.map((p, i) => planetList.push(p.name))
        const divPlanets = document.createElement('div')
 divPlanets.innerHTML = "<b>List of planets </b> <br> " + planetList;
 document.body.append(divPlanets);  
 });
 }
 planetList();

