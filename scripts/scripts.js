function validar() {

    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

// operador relacional e lógico
if (idade >= 16 && nivel > 5) {

    mensagem.innerText = "Inscrição aceita: Categoria Pro!";
    mensagem.style.color = "green";

} else if (idade >= 16 && nivel <= 5) {

    mensagem.innerText = "Inscrição aceita: Categoria Iniciante!";
    mensagem.style.color = "blue";

} else {
    mensagem.innerText = "Inscrição Negada. Idade mínima: 16 anos";
    mensagem.style.color = "red";
    }

}