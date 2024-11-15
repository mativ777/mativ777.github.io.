const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerra = document.querySelector("#cerra");
const navegacion = document.querySelector("#navegacion");
const navegacion_2 = document.querySelector("#navegacion_2");
const navegacion_3 = document.querySelector("#navegacion_3");
const navegacion_4 = document.querySelector("#navegacion_4");

abrir.addEventListener("click" , () => {
    nav.classList.add("visible");
})

cerra.addEventListener("click" , () => {
    nav.classList.remove("visible");
})

navegacion.addEventListener("click" , ()=> {
    nav.classList.remove("visible");
})

navegacion_2.addEventListener("click" , ()=> {
    nav.classList.remove("visible");
})

navegacion_3.addEventListener("click" , ()=> {
    nav.classList.remove("visible");
})

navegacion_4.addEventListener("click" , ()=> {
    nav.classList.remove("visible");
})