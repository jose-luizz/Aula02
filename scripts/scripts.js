function validar() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");
    

// operador relacional e lógico
if (idade >= 16 && nivel > 5) {

    mensagem.innerText = "Você está na categoria Pro!";
    mensagem.style.color = "green";

    } else if (idade >= 16 && nivel <= 5) {

    mensagem.innerText = "Você está na categoria Iniciante!";
    mensagem.style.color = "blue";

    } else {
    mensagem.innerText = "Inscrição Negada. Idade mínima: 16 anos";
    mensagem.style.color = "red";

    }
    
}

function validarSenha() {

    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagemSenha = document.getElementById("mensagemSenha");

    // validação de senha
if (senha1.length < 8) {

    mensagemSenha.innerText = "A senha precisa ter no mínimo 8 caracteres.";
    mensagemSenha.style.color = "red";

} else if (senha1 !== senha2) {

    mensagemSenha.innerText = "As senhas não coincidem.";
    mensagemSenha.style.color = "red";

} else {

    mensagemSenha.innerText = "Senha válida, cadastro concluído com sucesso!";
    mensagemSenha.style.color = "green";

    }

}

function validarDesconto() {
    const idade = document.getElementById("idade2").value;
    const estudante = document.getElementById("estudante");
    const mensagemDesconto = document.getElementById("mensagemDesconto");

    if (idade >= 60 || estudante.checked) {
        mensagemDesconto.innerText = "Você ganhou o desconto!";
        mensagemDesconto.style.color = "green";
    } else {
        mensagemDesconto.innerText = "Você não ganhou o desconto.";
        mensagemDesconto.style.color = "red";
    }



}

function validarPreenchimento() {

    const nome = document.getElementById("nomeVazio").value;
    const idade = document.getElementById("idadeNegativa").value;
    const mensagemVazio = document.getElementById("mensagemVazio");
    const idadeInput = document.getElementById("idadeNegativa").value;

     if (nome === "" || idadeInput === "" || idade < 0) {
        mensagemVazio.innerText = "Erro: Preencha corretamente todos os campos.";
        mensagemVazio.style.color = "red";
    } else {
        mensagemVazio.innerText = "Cadastro válido!";
        mensagemVazio.style.color = "green";
    }
}
