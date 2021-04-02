
function planetList(){
   fetch('http://swapi.dev/api/planets')
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
