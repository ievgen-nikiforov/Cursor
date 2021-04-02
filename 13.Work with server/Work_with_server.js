document.getElementById("get_info").addEventListener("click", getInfo, {once : true});

function getInfo(e) {
    e.preventDefault()
    fetch('https://swapi.dev/api/films/2')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const characters = data.characters;
            const divIndex = document.createElement('div')
            divIndex.innerHTML = "<b>Information about the characters</b>";
            document.body.append(divIndex);

            for (let index = 0; index < characters.length; index++) {
                fetch(characters[index])
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        const divCharachter = document.createElement('div')
                        divCharachter.innerHTML = "<b>Name is </b> " + data.name + ", <b>Year of birth is </b>"+ data.birth_year + ", <b>gender is</b> "+data.gender;
                        document.body.append(divCharachter);
                    });
            }
        })
}
function planetList(){
   fetch('https://swapi.dev/api/planets')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const planetList = [];
    const planetsData = data.results;
       planetsData.map((p, i) => planetList.push(p.name))
       console.log(planetList) 
       const divPlanets = document.createElement('div')
divPlanets.innerHTML = "<b>List of planets </b> <br> " + planetList;
document.body.append(divPlanets);
       
});
}
planetList();
function openNewPage(){
    window.location.href = 'newPage.html'
}
document.getElementById("next").addEventListener("click",openNewPage , {once : true});
