console.log("JavaScript da ONG Esperança funcionando!");

document.addEventListener("DOMContentLoaded", function () {

    // BOTÃO "QUERO AJUDAR"
    const botaoAjudar = document.getElementById("btn-ajudar");

    if (botaoAjudar) {
        botaoAjudar.addEventListener("click", function () {
            alert("Obrigado por querer ajudar a ONG Esperança!");
        });
    }


    // MODO ESCURO
    const botaoTema = document.getElementById("btn-tema");

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");

        if (botaoTema) {
            botaoTema.textContent = "Modo claro";
        }
    }

    if (botaoTema) {
        botaoTema.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("tema", "escuro");
                botaoTema.textContent = "Modo claro";
            } else {
                localStorage.setItem("tema", "claro");
                botaoTema.textContent = "Modo escuro";
            }

        });
    }


    // FORMULÁRIO DE CADASTRO
    const formulario = document.getElementById("form-cadastro");

    // Recupera dados salvos
    const dadosSalvos = localStorage.getItem("voluntario");

    if (dadosSalvos) {

        const voluntario = JSON.parse(dadosSalvos);

        const campoNome = document.getElementById("nome");
        const campoEmail = document.getElementById("email");

        if (campoNome) {
            campoNome.value = voluntario.nome;
        }

        if (campoEmail) {
            campoEmail.value = voluntario.email;
        }
    }


    // ENVIO DO FORMULÁRIO
    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();

            if (nome === "" || email === "") {

                alert("Preencha os campos obrigatórios.");

            } else {

                const voluntario = {
                    nome: nome,
                    email: email
                };

                const dadosParaSalvar = JSON.stringify(voluntario);

                localStorage.setItem("voluntario", dadosParaSalvar);

                alert("Cadastro realizado com sucesso!");
            }

        });
    }

});