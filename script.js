let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")
let assistir = document.querySelector(".link-assistir")

botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = !video.muted;
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block";
}

function esconderModal(){
    modal.style.display = "none";
}

// NÃO FUNCIONA DEVIDO A POLÍTICA DO GOOGLE CHROME
/* window.addEventListener("load", tocarAudioAutomatico); 

function tocarAudioAutomatico(){
    console.log(audio.play());
} */

assistir.addEventListener("click", tocarAudio)

function tocarAudio(){
    audio.play();
}

