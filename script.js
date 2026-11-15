
/* ELEMENTOS DO HTML */

const container = document.getElementById("container");

const botaoCadastrar = document.getElementById("cadastrar");

const botaoEntrar = document.getElementById("entrar");


/* ANIMAÇÃO DOS PAINÉIS */

// Quando clicar em Sign Up
botaoCadastrar.addEventListener("click", function() {

    container.classList.add("right-panel-active");

});

// Quando clicar em Sign In
botaoEntrar.addEventListener("click", function() {

    container.classList.remove("right-panel-active");

});


/* VALIDAÇÃO DO LOGIN */

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();

    let senha = document.getElementById("senha").value.trim();

    let mensagem = document.getElementById("mensagem");

    // Verificando campos vazios
    if (usuario === "" || senha === "") {

        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "white";

    }

    // Verificando usuário e senha
    else if (usuario === "aluno" && senha === "1234") {

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";

    }

    // Dados incorretos
    else {

        mensagem.textContent = "Usuário ou senha incorretos!";
        mensagem.style.color = "red";

    }

});


/* VALIDAÇÃO DEMONSTRATIVA DO CADASTRO */

const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();

    let email = document.getElementById("emailCadastro").value.trim();

    let senhaCadastro = document.getElementById("senhaCadastro").value.trim();

    let mensagemCadastro = document.getElementById("mensagemCadastro");

    // Verificando campos vazios
    if (nome === "" || email === "" || senhaCadastro === "") {

        mensagemCadastro.textContent = "Preencha todos os campos!";
        mensagemCadastro.style.color = "red";

    }

    // Cadastro demonstrativo
    else {

        mensagemCadastro.textContent = "Cadastro demonstrativo concluído!";
        mensagemCadastro.style.color = "green";

    }

});
