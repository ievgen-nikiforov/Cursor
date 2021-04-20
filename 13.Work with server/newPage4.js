
function planetList(){
    fetch('https://swapi.dev/api/planets/?page=5')
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
 function openNewPage5(){
    window.location.href = 'newPage5.html'
}

 document.getElementById("next").addEventListener("click",openNewPage5 , {once : true});