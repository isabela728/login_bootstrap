let cadastro = false;

    const elTitulo = document.getElementById("titulo");
    const elBotao = document.getElementById("botao-envio");
    const elToggle = document.getElementById("toggle");
    const elPergunta = document.getElementById("texto-pergunta");
    const elMensagem = document.getElementById("mensagem");
    
    elToggle.onclick = () => {
        cadastro = !cadastro;
        
        elTitulo.innerText = cadastro ? "Cadastro" : "Login";
        elBotao.innerText = cadastro ? "Cadastrar" : "Entrar";
        elPergunta.innerText = cadastro ? "Já tem conta?" : "Não tem conta?";
        elToggle.innerText = cadastro ? "Faça Login!" : "Cadastre-se";
        
        elMensagem.innerHTML = "";
    };
    
    document.getElementById("form-login").onsubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        elMensagem.innerHTML = "";
        if (!email.includes("@") || !email.includes(".")) {
            elMensagem.innerHTML = "<div class='text-danger fw-bold'>Email Inválido!</div>";
            return;
        }
        if (senha.length < 4) {
            elMensagem.innerHTML = "<div class='text-danger fw-bold'>Senha muito curta!</div>";
            return;
        }
        if (cadastro) {
            localStorage.setItem(email, senha);
            elMensagem.innerHTML = "<div class='text-success fw-bold'>Cadastrado com sucesso!</div>";
        } else {
            let salva = localStorage.getItem(email);
            if (salva === senha) {
                elMensagem.innerHTML = "<div class='text-success fw-bold'>Login com sucesso!</div>";
            } else {
                elMensagem.innerHTML = "<div class='text-danger fw-bold'>Dados Incorretos!</div>";
            }
        }
        document.getElementById("form-login").reset();
    }