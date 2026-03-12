// script.js

// MENU MOBILE
function abrirMenu(){
    let menu = document.getElementById("menu");
    menu.classList.toggle("ativo");
}

// Fechar o menu ao clicar em um link (para melhor UX no mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        let menu = document.getElementById("menu");
        if(menu.classList.contains("ativo")) {
            menu.classList.remove("ativo");
        }
    });
});

// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    }else{
        botaoTopo.style.display = "none";
    }
});

botaoTopo.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
