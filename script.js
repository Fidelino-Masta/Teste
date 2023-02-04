var enviar = document.getElementById("env")

var hor;
var min;
var seg;
var music = new Audio('audio/1-01 Ven Pa Ka.mp3')
var s;

function horario() {
    setInterval(() => {

        s = new Date();

        hor = document.querySelector(".hora")
        min = document.querySelector(".min")
        seg = document.querySelector(".seg")

        document.getElementById("hora").innerText = `${s.getHours()}`;
        document.getElementById("minuto").innerText = `${s.getMinutes()}`;
        document.getElementById("segundo").innerText = `${s.getSeconds()}`
        
        if((hor.value == s.getHours()) && (min.value == s.getMinutes()) && (seg.value == s.getSeconds())) {
            music.play()
        }
    },1000)
}

enviar.addEventListener("click", () => horario())