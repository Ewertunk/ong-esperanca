console.log("JavaScript da ONG Esperança funcionando!");

document.addEventListener("DOMContentLoaded", function () {

    // Botão "Quero ajudar"
    const botaoAjudar = document.getElementById("btn-ajudar");

    if (botaoAjudar) {
        botaoAjudar.addEventListener("click", function () {
            alert("Obrigado por querer ajudar a ONG Esperança!");
        });
    }

    // Formulário de cadastro
    const formulario = document.getElementById("form-cadastro");

    // Recupera os dados salvos no localStorage
    const dadosSalvos = localStorage.getItem("voluntario");

    if (dadosSalvos) {

        // Converte o texto novamente para objeto JavaScript
        const voluntario = JSON.parse(dadosSalvos);

        const campoNome = document.getElementById("nome");
        const campoEmail = document.getElementById("email");

        // Coloca os dados novamente nos campos
        if (campoNome) {
            campoNome.value = voluntario.nome;
        }

        if (campoEmail) {
            campoEmail.value = voluntario.email;
        }
    }

    // Envio do formulário
    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            // Impede o recarregamento da página
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();

            // Validação
            if (nome === "" || email === "") {

                alert("Preencha os campos obrigatórios.");

            } else {

                // Cria um objeto com os dados
                const voluntario = {
                    nome: nome,
                    email: email
                };

                // Converte o objeto para texto
                const dadosParaSalvar = JSON.stringify(voluntario);

                // Salva no localStorage
                localStorage.setItem("voluntario", dadosParaSalvar);

                alert("Cadastro realizado com sucesso!");
            }

        });
    }

});