let films = [];
let planets = [];
let obj = {};
fetch("https://swapi.dev/api/films/")
.then(res => res.json())
.then(res => {
    
    for (let i of res.results){
        for (let k of i.planets){
            fetch(k)
            .then(res1=> res1.json())
            .then(res1 => planets.push(res1.name)
            );
        }
        films.push({ planets: planets });
        films.push({opening_crawl: i.opening_crawl});
    }
    console.log(films);

});