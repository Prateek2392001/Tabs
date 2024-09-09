let aboutButtonElement = document.getElementById("aboutButton");
let timeTovisitButtonElement = document.getElementById("timeToVisitButton");
let attractionButtonElement = document.getElementById("attractionsButton");


let aboutTabElement = document.getElementById("aboutTab");
let timeTovisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

timeTovisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function about() {
    aboutTabElement.classList.remove("d-none");
    timeTovisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.add("selected-button");
    timeTovisitButtonElement.classList.remove("selected-button");
    attractionButtonElement.classList.remove("selected-button");

}

function timeToVisit() {
    aboutTabElement.classList.add("d-none");
    timeTovisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeTovisitButtonElement.classList.add("selected-button");
    attractionButtonElement.classList.remove("selected-button");

}

function attractions() {
    aboutTabElement.classList.add("d-none");
    timeTovisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");

    aboutButtonElement.classList.remove("selected-button");
    timeTovisitButtonElement.classList.remove("selected-button");
    attractionButtonElement.classList.add("selected-button");

}