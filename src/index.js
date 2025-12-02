import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

const homeBtn = document.getElementById("btn-home");
const menuBtn = document.getElementById("btn-menu");
// const aboutBtn = document.getElementById("btn-about");

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);

loadHome();