const flashinglights = document.querySelectorAll(".luz")
const textodosinal = document.querySelector("#textodosinal")
let     luzatual = 0

const avisos = ["PARE!!", "ESPERE!!", "VAI!!",]
const cores = ["red", "yellow", "green"]

function trocarluz(){
    flashinglights.forEach(luz => luz.classList.remove("acesa"))
    flashinglights[luzatual].classList.add("acesa")

    textodosinal.textContent = avisos[luzatual]
    textodosinal.style.color = cores[luzatual]

    luzatual = (luzatual + 1) % avisos.length
}
setInterval(trocarluz,1500);