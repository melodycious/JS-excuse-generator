/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let who = [
    "Mi hamster",
    "Mi tía Luisa",
    "El pájaro del vecino",
    "Mi jefe",
    "Mi hermano",
    "Mi vecina",
    "Mi cuñado",
    "Mi abuelo"
  ];
  let action = [
    "ha perdido",
    "ha robado",
    "ha roto",
    "ha quemado",
    "ha escondido",
    "ha tirado",
    "ha borrado"
  ];
  let what = [
    "mi proyecto",
    "mi ordenador",
    "mi móvil",
    "mis llaves",
    "mi cartera",
    "mi dinero",
    "mis ahorros",
    "mi teléfono",
    "mis auriculares"
  ];
  let when = [
    "justo ahora",
    "ahora mismo",
    "en este momento",
    "cuando estaba de camino",
    "antes de salir"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);

  let actionIndex = Math.floor(Math.random() * action.length);

  let whatIndex = Math.floor(Math.random() * what.length);

  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

let cambia_imagen = new Array();
cambia_imagen[0] = "src/assets/img/0.jpg";
cambia_imagen[1] = "src/assets/img/1.jpg";
cambia_imagen[2] = "src/assets/img/2.jpg";
cambia_imagen[3] = "src/assets/img/3.jpg";
cambia_imagen[4] = "src/assets/img/4.jpg";
cambia_imagen[5] = "src/assets/img/5.jpg";
cambia_imagen[6] = "src/assets/img/6.jpg";
cambia_imagen[7] = "src/assets/img/7.jpg";
cambia_imagen[8] = "src/assets/img/8.jpg";
cambia_imagen[9] = "src/assets/img/9.jpg";

function randomImageGenerator(n) {
  return Math.floor(Math.random() * n + 1);
}

window.onload = () => {
  document.querySelector("#buttonExcuse").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
    document.getElementById("randomImage").src =
      cambia_imagen[randomImageGenerator(9) - 1];
  });
};
