import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarExcusa() {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['comió', 'se meó', 'chocó', 'rompió'];
    let what = ['mis deberes', 'mi móvil', 'el coche'];
    let when = ['antes de clases','mientras dormía','haciendo ejercicio','durante la hora de la comida', 'mientras rezaba'];
    
    let excusa =
    `${who[Math.floor(Math.random() * who.length)]} ` +
    `${action[Math.floor(Math.random() * action.length)]} ` +
    `${what[Math.floor(Math.random() * what.length)]} ` +
    `${when[Math.floor(Math.random() * when.length)]} 😓`;

    document.getElementById("excuse").innerHTML = excusa;
  }
  generarExcusa();
};