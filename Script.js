const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const contador = botao.querySelector("span");

        if (curtiu) {
            contador.textContent--;
        } else {
            contador.textContent++;
        }

        curtiu = !curtiu;
    });
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
});