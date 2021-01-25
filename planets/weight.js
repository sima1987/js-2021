
MERCURY = { name: "Mercury", mass: 3.303e+23, radius: 2.4397e6 }
VENUS = { name: "Venus", mass: 4.869e+24, radius: 6.0518e6 }
EARTH = { name: "Earth", mass: 5.976e+24, radius: 6.37814e6 }
MARS = { name: "Mars", mass: 6.421e+23, radius: 3.3972e6 }
JUPITER = { name: "Jupiter", mass: 1.9e+27, radius: 7.1492e7 }
SATURN = { name: "Saturn", mass: 5.688e+26, radius: 6.0268e7 }
URANUS = { name: "Uranus", mass: 8.686e+25, radius: 2.5559e7 }
NEPTUNE = { name: "Neptun", mass: 1.024e+26, radius: 2.4746e7 }


G = 6.67300E-11

var planets = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE]

function surfaceGravity(planet) {
    return G * planet.mass / (planet.radius * planet.radius)
}
function surfaceWeight(yourMass, planet) {
    return yourMass * surfaceGravity(planet)
}

document.querySelector("input[type='button']")
    .addEventListener("click", calculateAndShowWeights)

function calculateAndShowWeights() {
    let weightOnEarth = document.querySelector("#weight").value
    let mass = weightOnEarth / surfaceGravity(EARTH)
    let weightsOnPlanets = planets.map( planet => surfaceWeight(mass, planet))

    //1.for
    for (let index = 0; index < planets.length; index++) {
        const planet = planets[index];
        let weightOnPlanet = weightsOnPlanets[index]
        //cream un nou rand//
        let row = document.createElement("tr")
        //cream o celula pentru numele planetei//
        let planetNameCell = document.createElement("td")
        planetNameCell.innerText = planet.name
        //cream o celula pentru greutatea pe acea planeta//
        let weightCell = document.createElement("td")
        weightCell.innerText = weightOnPlanet
        //adaugam celulele la rand//
        row.appendChild(planetNameCell)
        row.appendChild(weightCell)
        //adaugam randul in tabel//
        document.querySelector("table").appendChild(row)
    }
    //facem tabelul sa devina vizibil (scoatem clasa hidden de pe tabel)
    document.querySelector("table").classList.remove("hidden")
}