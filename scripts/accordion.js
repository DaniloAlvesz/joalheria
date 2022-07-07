

function exibir() {
    document.getElementById("accordion");
    var painel = document.getElementById("painel");
        painel.classList.remove("hide");
}

function manter() {
    document.getElementById("painel");
    var painel = document.getElementById("painel");
        painel.classList.remove("hide");
}

function tirar() {
    document.getElementById("painel");
    var painel = document.getElementById("painel");
        painel.classList.add("hide");
}

function apagar() {
    document.getElementById("accordion");
    var painel = document.getElementById("painel");
        painel.classList.add("hide");
}



